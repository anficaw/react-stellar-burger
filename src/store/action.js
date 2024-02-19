import { setAuthChecked, setSentMessage, setUser } from "./user-slice";
import { saitlogin, saituser, saittoken, saitregister,saitlogout, saitfogot, saitreset} from "../utils/data";


function checkResponse(res) {
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

const fetchwithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.massage === "jwt expired") {
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
    }
  }
};

export const getUser = () => {
  return (dispatch) => {
    return fetchwithRefresh(saituser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.success) {
        dispatch(setUser(res.user));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
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
          dispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const registration = (email, password, name) => {
  return (dispatch) => {
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
          dispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const redact = (email, name) => {
  return (dispatch) => {
    return fetch(saituser, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
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
          dispatch(setUser(res.user));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const exit = () => {

  return (dispatch) => {
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
          dispatch(setUser(null));
        } else {
          return Promise.reject("Ошибка данных с скервера");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(false));
      });
  };
};

export const fogot = (email) => {

  return (dispatch) => {
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
        dispatch(setSentMessage(true));
      });
  };
};

export const resetPass = (code, password) => {
  return (dispatch) => {
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
        dispatch(setAuthChecked(false));
      });
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
      dispatch(setUser(null));
    }
  };
};
