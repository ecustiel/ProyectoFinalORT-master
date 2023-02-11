import { useState } from "react";
import FirstStep from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";
import FourthStage from "./FourthStage";
import FifthStage from "./FifthStage";
import SixthStage from "./SixthStage";
import "./styles.css";
import { useRegisterPubStore } from "../../Hooks/useRegisterPubStore";
import useFormContext from "../../Hooks/useFormContext";
import { Toast } from "../../Helpers/SwalHelpers";
import { useNavigate } from "react-router-dom";

import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";

export const Pagination = () => {
  const { publication, handleChange } = useFormContext();
  const { regPublication } = useRegisterPubStore();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 5 ? 5 : nextStep);
  };

  const onNext = () => {
    onChange(step + 1);
  };
  const onPrevious = () => onChange(step - 1);
  let Render = null;

  //Confirm Final Hay varias validaciones
  const onSubmit = async (e) => {
    e.preventDefault();
    if (publication.title !== "") {
      if (
        publication.pric1 !== "" &&
        publication.pric2 !== "" &&
        publication.pric3 !== ""
      ) {
        if (
          publication.cantHuespedes !== "" &&
          publication.tipoPropiedad !== "" &&
          publication.direccion !== "" &&
          publication.balneario !== ""
        ) {
          if (
            publication.cantDormitorios !== "" &&
            publication.cantBanos !== "" &&
            publication.vistaAlMar !== "" &&
            publication.dosPlazas !== "" &&
            publication.unaPlaza !== "" &&
            publication.sofaCama !== "" &&
            publication.colchon !== "" &&
            publication.cucheta !== ""
          ) {
            if (publication.imagenesBase64 !== "") {
              if (publication.descripcionPropiedad !== "") {
                //Validacion Final
                publication.idUser = localStorage.getItem("uid");
                if ((await regPublication(publication)) === true) {
                  navigate("/");
                  Toast.fire({
                    icon: "success",
                    title: "Publicado Exitosamente!",
                  });
                } else {
                  Toast.fire({
                    icon: "error",
                    title:
                      "Error en la Publicacion, Verifique los campos e intente nuevamente!",
                  });
                }
              } else {
                Toast.fire({
                  icon: "warning",
                  title: "De al menos un detalle minimo de la propiedad!",
                });
              }
            } else {
              Toast.fire({
                icon: "warning",
                title: "Debe cargar como minimo 1 Imagen de la Propiedad!",
              });
            }
          } else {
            Toast.fire({
              icon: "warning",
              title:
                "Falta Completar campos en Detalles de la Propiedad para Continuar!",
            });
          }
        } else {
          Toast.fire({
            icon: "warning",
            title:
              "Debe indicar Cantidad de Huespedes, Tipo de Propiedad y Direccion!",
          });
        }
      } else {
        Toast.fire({
          icon: "warning",
          title: "Debe indicar los precios para las 3 Temporadas!",
        });
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "Debe indicar un Titulo para la Publicacion!",
      });
    }

    //Aca corta
  };

  switch (step) {
    case 0:
      Render = <FirstStep onNext={onNext} />;
      break;
    case 1:
      Render = <SecondStage />;
      break;
    case 2:
      Render = <ThirdStage />;
      break;
    case 3:
      Render = <FourthStage />;
      break;
    case 4:
      Render = <FifthStage />;
      break;
    case 5:
      Render = <SixthStage />;
      break;
    default:
      <FirstStep />;
      break;
  }

  return (
    <div className="fondoPagination">
      <div className="mt-5 w-75 vh-75 mx-auto">
        <Steps current={step}>
          <Steps.Item title="Paso 1" description="Datos de la Operacion" />
          <Steps.Item title="Paso 2" description="Datos Generales" />
          <Steps.Item title="Paso 3" description="Detalles de la Propiedad" />
          <Steps.Item title="Paso 4" description="Confort" />
          <Steps.Item title="Paso 5" description="Gestion de Imagenes" />
          <Steps.Item title="Finalizar" description="Descripcion" />
        </Steps>
        <hr />
        <Panel shaded>{Render}</Panel>

        <ButtonGroup className="btnGroup">
          <Button onClick={onPrevious} disabled={step === 0}>
            Previous
          </Button>
          <Button onClick={onNext} disabled={step === 5}>
            Next
          </Button>
          <Button onClick={onSubmit} disabled={step !== 5}>
            Confirmar
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Pagination;
