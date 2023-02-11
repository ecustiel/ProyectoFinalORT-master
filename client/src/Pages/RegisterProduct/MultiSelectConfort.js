import React, { useState } from "react";
import Select from "react-select";
import useFormContext from "../../Hooks/useFormContext";

const MultiSelectConfort = () => {
  const { publication, handleChange } = useFormContext();

  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeOption = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    publication.opcionesConfort = selectedOption.map(
      (selected) => selected.value
    );
  };

  const confortOptions = [
    { value: "Agua Caliente ", label: "Agua Caliente" },
    { value: "Aire Acondicionado", label: "Aire Acondicionado" },
    { value: "Amueblada", label: "Amueblada" },
    { value: "Barbacoa", label: "Barbacoa" },
    { value: "Calefaccion", label: "Calefaccion" },
    { value: "Calefon", label: "Calefon" },
    { value: "Cochera", label: "Cochera" },
    { value: "Deposito", label: "Deposito" },
    { value: "Estufa a Leña", label: "Estufa a Leña" },
    { value: "TV Cable", label: "TV Cable" },
    { value: "Jardin", label: "Jardin" },
    { value: "Lavanderia", label: "Lavanderia" },
    { value: "Parrillero", label: "Parrillero" },
    { value: "Piscina", label: "Piscina" },
    { value: "Se Aceptan Mascotas", label: "Se Aceptan Mascotas" },
    { value: "Terraza", label: "Terraza" },
  ];

  return (
    <>
      <Select
        isMulti
        name="opcionesConfort"
        className="basic-multi-select"
        classNamePrefix="select"
        options={confortOptions}
        onChange={handleChangeOption}
        getValue={publication.opcionesConfort}
      />
    </>
  );
};

export default MultiSelectConfort;
