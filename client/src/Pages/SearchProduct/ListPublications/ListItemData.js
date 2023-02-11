import React, { useState } from "react";
import { Button, Carousel } from "rsuite";
import { generatePath, useNavigate, Link } from "react-router-dom";
import "./ListItemData.css";

const ListItemData = ({
  item: { idPub, title, pric1, pric2, pric3, imagenesBase64, balneario },
}) => {
  const [imagenesString, setImagenesString] = useState([]);
  const [imagenesSinConvertir, setImagenesSinConvertir] =
    useState(imagenesBase64);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //(idPub);
    navigate(`/publication/${idPub}`);
  };

  return (
    <div className="listItem-wrap" onClick={handleSubmit}>
      <Carousel autoplay className="custom-slider">
        {imagenesSinConvertir.map((item) => {
          return <img src={`data:image/jpg;base64,${item}`} alt="img" />;
        })}
      </Carousel>
      <header>
        <h4>{title}</h4>
      </header>
      <footer>
        <p>
          <strong>Balneario:</strong> {balneario}
        </p>
        <span>
          ⬆️<strong>Precio Temporada Alta:</strong> U$D{pric1}{" "}
        </span>
        <span>
          ➡️<strong>Precio Temporada Media:</strong> U$D{pric2}{" "}
        </span>
        <span>
          ⬇️<strong>Precio Temporada Baja:</strong> U$D{pric3}{" "}
        </span>
      </footer>
    </div>
  );
};

export default ListItemData;
