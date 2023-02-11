import React, { useState, useEffect } from "react";
import FilterToggle from "./FilterListToggle/FilterToggle";
import { useRegisterPubStore } from "../../Hooks/useRegisterPubStore";
import { Toast } from "../../Helpers/SwalHelpers";
import "./FilterPanel.css";
import CheckBoxProton from "./CheckBoxProton/CheckBoxProton";
import SliderProton from "./SliderProton/SliderProton";

let categoryList = [
  {
    id: 1,
    value: "Casa",
    label: "Casa",
  },
  {
    id: 2,
    value: "Apartamento",
    label: "Apto.",
  },
  {
    id: 3,
    value: "Cabaña",
    label: "Cabaña",
  },
  {
    id: 4,
    value: "Estancia",
    label: "Estancia",
  },
];

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  balnearios,
  changeChecked,
  changedPrice,
  selectedPrice,
}) => {
  const { getPublications } = useRegisterPubStore();
  const [dataPublications, setDataPublications] = useState([]);
  const [propertyType, setPropertyType] = useState({
    idPub: "",
    tipoPropiedad: "",
  });

  /*
  

  dataPublications.map((item) => {
    if (
      categoryList.find((cat) => cat.tipoPropiedad === item.tipoPropiedad) ==
      null
    ) {
      categoryList.push({
        idPub: item.idPub,
        tipoPropiedad: item.tipoPropiedad,
        label: item.tipoPropiedad,
      });
      return true;
    } else {
      return false;
    }
  });*/


  return (
    <div>
      {/* Categoria */}
      <div className="input-group">
        <p className="label">Tipo Propiedad</p>
        <FilterToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
          className="FilterToggle"
        />
      </div>

      {/* Balneario */}
      <div className="input-group">
        <p className="label">Balnearios</p>
        {balnearios.map((balneario) => (
          <CheckBoxProton
            key={balneario.id}
            balneario={balneario}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* Rango de Precio */}
      <div className="input-group">
        <p className="label-range">Rango de Precios</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/*  */}
    </div>
  );
};

export default FilterPanel;
