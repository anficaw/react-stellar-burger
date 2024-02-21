import { setAuthChecked, setSentMessage, setUser } from "./user-slice";
import { saitlogin, saituser, saittoken, saitregister,saitlogout, saitfogot, saitreset} from "../utils/data";
import { TUser, TUserone} from "../types";
import { AppDispath } from ".";

const nullUser:TUserone = {
  name:'name',
  email:'email',
}


function checkResponse(res:Response) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
}


const refreshToken = () => {
  return fetch(saittoken, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

const fetchwithRefresh = async (url:string, options:any) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    console.log("ghjdthkjkjdsg");
    console.log(err);
    /*if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);

      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }*/
  }
};

export const getUser = () => {
  return (useAppDispatch:AppDispath) => {
    return fetchwithRefresh(saituser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.success) {
        useAppDispatch(setUser(res.user));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};

export const login = (email:string , password:string ) => {
  return (useAppDispatch:AppDispath) => {
    return fetch(saitlogin, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          /*console.log("Получили токен");
          console.log(res.refreshToken);
          console.log(res.accessToken);*/
          useAppDispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setAuthChecked(true));
      });
  };
};

export const registration = (email:string, password:string , name:string ) => {
  return (useAppDispatch:AppDispath) => {
    return fetch(saitregister, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          console.log("Получили токен");
          console.log(res.refreshToken);
          console.log(res.accessToken);
          useAppDispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setAuthChecked(true));
      });
  };
};

function token(){
  const pppp=localStorage.getItem("accessToken");
  if (pppp === null){
    return "";
  }else{
    return pppp;
  }
}


export const redact = (email:string , name:string) => {
  return (useAppDispatch:AppDispath) => {
    return fetch(saituser, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token(),
      },
      body: JSON.stringify({
        email: email,     
        name: name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          console.log("Обновили информацию");
          console.log(res.refreshToken);
          console.log(res.accessToken);
          useAppDispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setAuthChecked(true));
      });
  };
};

export const exit = () => {

  return (useAppDispatch:AppDispath) => {
    return fetch(saitlogout, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          console.log("Успешно вышли");
          console.log(res.message);
          useAppDispatch(setUser(nullUser));
          useAppDispatch(setAuthChecked(false));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setAuthChecked(false));
      });
  };
};

export const fogot = (email:string) => {

  return (useAppDispatch:AppDispath) => {
    return fetch(saitfogot, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:email,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          console.log("Письмо отправлено");
          console.log(res.message);
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setSentMessage(true));
      });
  };
};

export const resetPass = (code:string, password:string) => {
  return (useAppDispatch:AppDispath) => {
    return fetch(saitreset, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,     
        token: code,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          console.log("Обновили пароль");
          console.log(res.message);
           
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        useAppDispatch(setAuthChecked(false));
      });
  };
};

export const checkUserAuth = () => {
  return (useAppDispatch:AppDispath) => {
    if (localStorage.getItem("accessToken")) {
      useAppDispatch(getUser())
        /*.catch((error) => {*/
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        })
        .finally(() => useAppDispatch(setAuthChecked(true)));
    } else {
      useAppDispatch(setAuthChecked(true));
      useAppDispatch(setUser(nullUser));
    }
  };
};
