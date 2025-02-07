import React from "react";
//2 - Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
//4 - Navegando entre paginas  
import Navbar from "./components/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
    </div>
  )
}

export default Index