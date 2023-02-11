import React, { useState } from "react";

const SecurityOptions = ({ opcionesSeguridad }) => {
  const [securityOptions, setSecurityOptions] = useState(opcionesSeguridad);

  return (
    <div>
      <h5>Opciones de Seguridad</h5>
      {securityOptions.length > 0 ? (
        securityOptions.map((item) => {
          return <p>🔸{item}</p>;
        })
      ) : (
        <p>Sin Opciones</p>
      )}
    </div>
  );
};

export default SecurityOptions;
