import React, { useEffect, useState, useRef } from "react";

import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  LoadScript,
  MarkerF,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const PublicationMap = ({ direccion }) => {
  const [direccionMapa, setDireccionMapa] = useState(direccion);
  const [coordenadas, setCoordenadas] = useState({
    lat: parseFloat(0),
    lng: parseFloat(0),
  });

  //Probando
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //Volver a poner el Coordenadas en el array del input
  useEffect(() => {
    const setearDireccion = async () => {
      try {
        const res = await geocodeByAddress(direccionMapa)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => setCoordenadas({ lat: lat, lng: lng }));

        //(res);
      } catch (error) {
        console.log(error);
      }
    };
    setearDireccion();
    setTimeout(() => {
      setearDireccion();
    }, 3000);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDYu1LOM18trcdTPiOX6th1r2yZSMCKZ2g">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordenadas}
        zoom={16}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={coordenadas} />
      </GoogleMap>
    </LoadScript>
  );
};

export default PublicationMap;
