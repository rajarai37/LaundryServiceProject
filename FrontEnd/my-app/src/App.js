import React from "react";
import Register from "./Components/register/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/loginbody/Login";
import Addorder from "./Components/Addorder/Addorder";
import CreateOrder from "./Components/Createorder/Createorder";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addorder" element={<Addorder />} />
        <Route path="/createorder" element={<CreateOrder />} />
      </Routes>
    </>
  );
};
export default App;
