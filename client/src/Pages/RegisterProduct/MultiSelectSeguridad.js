import React, { useState } from "react";
import Select from "react-select";
import useFormContext from "../../Hooks/useFormContext";

const MultiSelectSeguridad = () => {
  const { publication, handleChange } = useFormContext();

  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeOption = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    publication.opcionesSeguridad = selectedOption.map(
      (selected) => selected.value
    );
  };

  const securityOptions = [
    { value: "Alarma", label: "Alarma" },
    { value: "Sistema Camaras", label: "Sistema Camaras" },
    { value: "Cerca Perimetral", label: "Cerca Perimetral" },
    { value: "Porton Electrico", label: "Porton Electrico" },
    { value: "Rejas", label: "Rejas" },
    { value: "Guardia de Seguridad", label: "Guardia de Seguridad" },
    { value: "Segura para Niños", label: "Segura para Niños" },
  ];

  return (
    <>
      <Select
        isMulti
        name="confort"
        className="basic-multi-select"
        classNamePrefix="select"
        options={securityOptions}
        onChange={handleChangeOption}
        getValue={publication.opcionesSeguridad}
      />
    </>
  );
};

export default MultiSelectSeguridad;
