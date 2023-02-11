import React, { useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useParams, useLocation } from "react-router-dom";
import { useRegisterPubStore } from "../../Hooks/useRegisterPubStore";
import { Button, Carousel, ButtonToolbar } from "rsuite";
import registerPub from "../../Api/registerPubApi";
import { SyncLoader } from "react-spinners";
import StaticDateRangePickerDemo from "./DatePicker";

import { Panel, Placeholder } from "rsuite";
import PublicationMap from "./PublicationMap";
import DatePickerNow from "./DatePicker";
import ConfortOptions from "./ConfortOptions";
import SecurityOptions from "./SecurityOptions";
import Caracteristicas from "./Caracteristicas";
import "./PublicationPage.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const PublicationPage = () => {
  const [publicationData, setPublicationData] = useState({});
  const [chequeoTieneValor, setChequeoTieneValor] = useState(false);

  const [imagenesSinConvertir, setImagenesSinConvertir] = useState([]);
  const location = useLocation();

  const startCheck = async () => {
    const datauno = await registerPub.get(location.pathname);
    setPublicationData(datauno.data.publication);
    setImagenesSinConvertir(datauno.data.publication.imagenesBase64);
    setChequeoTieneValor(true);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  useEffect(() => {
    startCheck();
  }, []);

  const handleSelect = (e) => {
    //e.preventDefault();
  };
  //(publicationData);
  //(imagenesSinConvertir);

  return (
    <div>
      {chequeoTieneValor === false ? (
        <SyncLoader
          color={"#E08E45"}
          loading={true}
          size={40}
          margin={30}
          speedMultiplier={1}
          className="ringClass"
        />
      ) : (
        <div>
          <Panel header="" className="panel-outside" shaded>
            <h1>{publicationData.title}</h1>
            {imagenesSinConvertir.length === 0 ? (
              <SyncLoader
                color={"#E08E45"}
                loading={true}
                size={40}
                margin={30}
                speedMultiplier={1}
                className="ringClass"
              />
            ) : (
              <Carousel autoplay className="custom-slider-publication">
                {imagenesSinConvertir.map((item) => {
                  return (
                    <img src={`data:image/jpg;base64,${item}`} alt="img" />
                  );
                })}
              </Carousel>
            )}
            <div className="header-derecha">
              <h3>
                <strong>Balneario:</strong> {publicationData.balneario}
              </h3>
              <h4>
                <strong>Precios por Temporadas</strong>
              </h4>
              <p>
                <strong>Temporada Alta:</strong> ${publicationData.pric1}
              </p>
              <p>
                <strong>Temporada Media: </strong>${publicationData.pric2}
              </p>
              <p>
                <strong>Temporada Baja: </strong>${publicationData.pric3}
              </p>
              <p>
                <strong>Direccion: </strong>
                {publicationData.direccion}
              </p>
              <PublicationMap direccion={publicationData.direccion} />
            </div>
            <div className="midside-descripcion">
              <h1>Descripcion de la Propiedad</h1>
              <p>{publicationData.descripcionPropiedad}</p>
              <Caracteristicas publicationData={publicationData} />
            </div>
            <div className="under-description">
              <div className="sec-reserva">
                <h4>Seleccione la Fecha que desea Reservar</h4>
                <DatePickerNow />
              </div>
              <div className="sec-confort">
                <ConfortOptions
                  opcionesConfort={publicationData.opcionesConfort}
                />
              </div>
              <div className="sec-seguridad">
                <SecurityOptions
                  opcionesSeguridad={publicationData.opcionesSeguridad}
                />
              </div>
            </div>
            <ButtonToolbar className="sec-boton-reserva">
              <Button appearance="ghost" className="boton-reserva">
                Reservar!
              </Button>
            </ButtonToolbar>
          </Panel>
        </div>
      )}
    </div>
  );
};

export default PublicationPage;
