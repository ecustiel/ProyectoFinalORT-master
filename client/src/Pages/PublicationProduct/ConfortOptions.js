import React, { useState } from "react";

const ConfortOptions = ({ opcionesConfort }) => {
  const [confortOptions, setConfortOptions] = useState(opcionesConfort);

  return (
    <div>
      <h5>Opciones de Confort</h5>
      {confortOptions.length > 0 ? (
        confortOptions.map((item) => {
          return <p>🔹{item}</p>;
        })
      ) : (
        <p>Sin Opciones</p>
      )}
    </div>
  );
};

export default ConfortOptions;
