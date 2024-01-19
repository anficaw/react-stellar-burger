import styles from "./app.module.css";
 
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import { useEffect } from "react";


import { useDispatch } from "react-redux";

import {fetchList} from "../store/ingradients-slice";

 
function App() {
  
  const dispatch = useDispatch()
    useEffect (() => {
    dispatch(fetchList());
    
  }, [])


  return (
    <div className={styles.app}>
      <AppHeader />
      <Main/>
    </div>
  );
}

export default App;
