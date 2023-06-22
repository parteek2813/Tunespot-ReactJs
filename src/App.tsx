import React from "react";
import Home from "./screens/home/home";
import Public from "./components/public";
import Protected from "./components/protected";
import UseAuth from "./hooks/useAuth";

function App() {
  const isLogin = UseAuth(); // return either true or false

  return isLogin ? <Protected /> : <Public />;

  //  <div className="App">{/* <Home /> */}</div>;
}

export default App;
