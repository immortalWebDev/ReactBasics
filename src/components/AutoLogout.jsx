import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";

const AutoLogout = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  let logoutTimer;

  useEffect(() => {
    const resetTimer = () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      logoutTimer = setTimeout(() => {
        authCtx.logout(); 
        history.replace("/auth"); // Redirect to login page after logout
      }, 300000); //5 * 60 * 1000 , 5 mins of inactivity
    };
 
    //Initial render
    if (authCtx.isLoggedIn) {
      resetTimer();
    }

    const userActivityHandler = () => {
        if (authCtx.isLoggedIn) {
          resetTimer();
        }
      };

    document.addEventListener("mousemove", userActivityHandler);
    document.addEventListener("keydown", userActivityHandler);

    return () => {
      document.removeEventListener("mousemove", userActivityHandler);
      document.removeEventListener("keydown", userActivityHandler);
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    };
  }, [authCtx, history]);

//   return null; //Because component not returning any UI
};

export default AutoLogout;
