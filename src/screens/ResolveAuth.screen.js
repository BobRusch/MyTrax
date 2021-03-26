import React, { useEffect, useContext } from "react";

import { Context as AuthContext } from "../context/Auth.context";

export default ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};
