import React, { useState } from "react";
import { Button, Carousel } from "rsuite";
import "./itemToListData.css";

const ItemToListData = ({
  item: { idPub, title, pric1, pric2, pric3, imagenesBase64, balneario },
  ShowMeTheTrue,
}) => {
  const [imagenesString, setImagenesString] = useState([]);
  const [imagenesSinConvertir, setImagenesSinConvertir] =
    useState(imagenesBase64);
  return (
    <div
      className="listItemControl-wrap"
      key={idPub}
      id={idPub}
      onClick={ShowMeTheTrue}
    >
      <Carousel autoplay className="customControl-slider">
        {imagenesSinConvertir.map((item) => {
          return (
            <img src={`data:image/jpg;base64,${item}`} alt="img" id={idPub} />
          );
        })}
      </Carousel>
      <header id={idPub}>
        <h4 id={idPub}>{title}</h4>
      </header>
    </div>
  );
};

export default ItemToListData;
