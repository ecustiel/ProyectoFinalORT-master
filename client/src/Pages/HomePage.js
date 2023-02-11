import React from "react";
import fondoHome from "../Imagenes/fondoHome.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <img src={fondoHome} alt="Fondo Vacaciones" className="img-fondo" />
    </div>
  );
}
