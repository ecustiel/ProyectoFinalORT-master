import { useMemo, useRef, useState, useEffect } from "react";
import useFormContext from "../../Hooks/useFormContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import { Toast } from "../../Helpers/SwalHelpers";
import Swal from "sweetalert2";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function Home() {
  const { publication, handleChange } = useFormContext();
  const [geocodeResult, setGeocodeResult] = useState("");
  const [guardada, setGuardada] = useState(false);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const valorDireccion = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  //Guardar direccion
  const guardarDireccion = async () => {
    setGeocodeResult("");

    if (valorDireccion.current.value === "") {
      return Toast.fire({
        icon: "error",
        title: "Inserte una direccion valida!",
      });
    }

    try {
      const results = await geocodeByAddress(valorDireccion.current.value);

      setGeocodeResult(results);

      Toast.fire({
        icon: "success",
        title: "Direccion Agregada Correctamente!",
      });
    } catch (error) {
      error;
    }
  };

  if (geocodeResult !== "") {
    publication.direccion = geocodeResult[0].formatted_address;
  }

  return (
    <>
      <Form.Label className="w-100">
        <b>Ingrese la Direccion de la Propiedad </b>
      </Form.Label>
      <Autocomplete>
        <Form.Control
          className="w-50 mb-3"
          placeholder="Inserte la Direccion de la Propiedad"
          id="direccion"
          name="direccion"
          //value={}
          onChange={handleChange}
          ref={valorDireccion}
        />
      </Autocomplete>

      <Form.Label
        style={{
          color: "gray",
          font: "9px Arial, sans-serif",
          position: "absolute",
        }}
      >
        {" "}
        Sea preciso con la direccion, la misma sera usada con fines de
        Geolocalizacion en el Futuro
      </Form.Label>
      <Button variant="secondary" className="mt-3" onClick={guardarDireccion}>
        Agregar Direccion
      </Button>
    </>
  );
}
