import React, { useState } from "react";
import {
  FaUserFriends,
  FaDoorOpen,
  FaBath,
  FaCarAlt,
  FaWater,
  FaChair,
  FaObjectUngroup,
  FaProcedures,
} from "react-icons/fa";
import { BiBed } from "react-icons/bi";

const Caracteristicas = ({ publicationData }) => {
  const [
    {
      cantHuespedes,
      cantDormitorios,
      cantBanos,
      garaje,
      vistaAlMar,
      distanciaAlMar,
      dosPlazas,
      unaPlaza,
      sofaCama,
      colchon,
      cucheta,

      setState,
    },
  ] = useState(publicationData);

  return (
    <div>
      <h3>Comodidades</h3>
      <span>
        <FaUserFriends /> Cant. Huespedes Permitidos: {cantHuespedes}{" "}
      </span>
      <span>
        <FaDoorOpen /> Cant. Dormitorios: {cantDormitorios}{" "}
      </span>
      <span>
        <FaBath /> Cant. Baños: {cantBanos}{" "}
      </span>
      <span>
        <FaCarAlt /> Garaje Disponibles: {garaje}{" "}
      </span>
      <span>
        <FaWater /> Vista al Mar: {vistaAlMar}{" "}
      </span>
      <span>
        <BiBed /> Cama 2 Plazas: {dosPlazas}{" "}
      </span>
      <span>
        <BiBed /> Cama 1 Plaza: {unaPlaza}{" "}
      </span>
      <span>
        <FaChair /> Sofa Cama: {sofaCama}{" "}
      </span>
      <span>
        <FaObjectUngroup /> Colchones: {colchon}{" "}
      </span>
      <span>
        <FaProcedures /> Cucheta: {cucheta}{" "}
      </span>
    </div>
  );
};

export default Caracteristicas;
