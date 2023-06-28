import React from "react";
import Home from "./screens/home/home";
import Public from "./components/public";
import UseAuth from "./hooks/useAuth";

function App() {
  const isLogin = UseAuth();

  console.log(isLogin);
  return isLogin ? <Home /> : <Public />;
 
}

export default App;
