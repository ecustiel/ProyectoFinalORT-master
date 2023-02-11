import { useRef, useState } from "react";
import { Uploader, Button } from "rsuite";
import { Toast } from "../../Helpers/SwalHelpers";
import Swal from "sweetalert2";
import useFormContext from "../../Hooks/useFormContext";
import { prepareAutoBatched } from "@reduxjs/toolkit";

//Tener en cuenta que el Uploader tiene un data
const ImgUploader = () => {
  const { publication, handleChange } = useFormContext();
  const [value, setValue] = useState([]);
  const arrayPrueba = [];
  const uploader = useRef();

  const convertToBase64 = (file) => {
    let baseURL = "";
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      baseURL = reader.result;
      let auxiliar = [];
      auxiliar = baseURL.split(",");
      arrayPrueba.push(auxiliar[1]);
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    value.map((selected) => convertToBase64(selected.blobFile));

    publication.imagenesBase64 = arrayPrueba;

    if (publication.imagenesBase64 !== null) {
      Swal.fire({
        title: "Exito!",
        text: "Imagenes Cargadas Correctamente!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "No ha seleccionado ninguna imagen para subir!",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <>
      <Uploader
        value={value}
        autoUpload={false}
        onChange={setValue}
        ref={uploader}
        accept=".png, .jpeg, .jpg"
      />
      <p>Maximo 3 Imagenes!</p>
      <hr />
      <Button disabled={!value.length} onClick={onSubmit}>
        Start Upload
      </Button>
    </>
  );
};

export default ImgUploader;
