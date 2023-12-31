import React, { useEffect, useState, useRef } from "react";
import Keycloak from "keycloak-js";

const KEYCLOAK_URL = "http://127.0.0.1:4000/";
const KEYCLOAK_REALM = "tunespot";
const KEYCLOAK_CLIENT = "myclient";

const keycloak = new Keycloak({
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: KEYCLOAK_CLIENT,
});

const UseAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState({});

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({ onLoad: "login-required" })
      .then((res) => {
        setLogin(res);
      })
      .catch((error) => {
        console.log("Keycloak error: " + error);
      });
  }, []);

  return isLogin;
};

export default UseAuth;
