import React from "react";
import Register from "./Components/register/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/loginbody/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
