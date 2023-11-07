import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function App() {
//        GETTER      SETTER
  const [favorites, setFavorites] = useState([]);
  
  //every child within App.jsx will have access to both favorites and setFavorites
  return (
    <>
    <NavBar />
    <Outlet context={{ favorites, setFavorites }} />
    </>
  );
}

