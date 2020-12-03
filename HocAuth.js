import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const HocAuth = ({ children }) => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default HocAuth;
