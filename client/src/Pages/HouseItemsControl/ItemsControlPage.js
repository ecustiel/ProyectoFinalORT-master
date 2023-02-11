import React, { useState, useEffect } from "react";
import { useRegisterPubStore } from "../../Hooks/useRegisterPubStore";
import { Button } from "react-bootstrap";
import { Toast } from "../../Helpers/SwalHelpers";
import { SyncLoader } from "react-spinners";
import { useSelector } from "react-redux";
import ItemToList from "./ItemToList";
import { Panel } from "rsuite";
import "./ItemsControlPage.css";
import ItemsQuantityAndPrice from "../HouseItemsControl/ItemsQuantityAndPrice/ItemsQuantityAndPrice";
import ItemsQuantityAndPriceList from "./ItemsQuantityAndPrice/ItemsQuantityAndPriceList";

const ItemsControlPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { getPublications, itemListRegister } = useRegisterPubStore();
  const [dataPublicationsToWork, setDataPublicationsToWork] = useState([]);
  const [dataPublications, setDataPublications] = useState([]);
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  //Lista Productos
  const [items, setItems] = useState([]);
  const [idPublicacion, setIdPublicacion] = useState();
  const [contador, setContador] = useState(100);

  //arreglar que si id es distinto borre la lista
  const addItem = (item) => {
    if (showPanel) {
      if (item.nombre === "") {
        Toast.fire({
          title: "Error!",
          text: "Inserte un Nombre al Item!",
          icon: "error",
          confirmButtonText: "Ok!",
        });
        return;
      }

      if (item.cantidad === "") {
        Toast.fire({
          title: "Error!",
          text: "Inserte una Cantidad!",
          icon: "error",
          confirmButtonText: "Ok!",
        });
        return;
      }

      if (item.precio === "") {
        Toast.fire({
          title: "Error!",
          text: "Inserte un Precio!",
          icon: "error",
          confirmButtonText: "Ok!",
        });
        return;
      }

      setContador(contador + 1);
      setItems([...items, item]);
    } else {
      Toast.fire({
        title: "Error!",
        text: "Seleccione una Propiedad!",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
  };

  const borrarItem = (item) => {
    setItems(items.filter((dataItem) => dataItem.cont !== item.cont));
  };

  const setPublications = async () => {
    await getPublications().then((item) => {
      setDataPublicationsToWork(item.publicationsFromDB);
    });
    setTrueOrFalse(true);
  };

  const filterDataPublications = () => {
    dataPublicationsToWork.filter((item) => {
      if (item.idUser === user.uid && dataPublications.indexOf(item) < 0) {
        setDataPublications((dataPublications) => [...dataPublications, item]);
      }
    });
    setTrueOrFalse(false);
  };

  useEffect(() => {
    setPublications();

    filterDataPublications();
  }, []);

  const ShowMeTheTrue = (e) => {
    e.preventDefault();
    setIdPublicacion(e.target.id);
    e.target.id;
    setShowPanel(true);
  };

  const addItemListToBase = async (e) => {
    e.preventDefault();
    if ((await itemListRegister(items)) === true) {
      Toast.fire({
        title: "Exito!",
        text: "Agregada a Publicacion Correctamente!",
        icon: "success",
        confirmButtonText: "Ok!",
      });
    } else {
      Toast.fire({
        title: "Error!",
        text: "Error al Agregar Lista! Verifique!",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
  };

  return (
    <div className="panel-derecha-estilos">
      <h2>Seleccione Una de Sus Publicaciones!</h2>
      <Panel className="panel-arriba" shaded>
        {dataPublicationsToWork.length > 0 ? (
          <ItemToList
            dataPublicationsToWork={dataPublicationsToWork}
            ShowMeTheTrue={ShowMeTheTrue}
          />
        ) : (
          <SyncLoader
            color={"#E08E45"}
            loading={true}
            size={10}
            margin={10}
            speedMultiplier={1}
            className="ringClassNo"
          />
        )}
      </Panel>
      <Panel className="panel-abajo" shaded>
        <ItemsQuantityAndPrice
          addItemFun={addItem}
          idPublicacion={idPublicacion}
          contador={contador}
        />
      </Panel>
      <Panel className="panel-derecha" shaded>
        {items.map((item) => (
          <ItemsQuantityAndPriceList
            item={item}
            key={contador}
            borrarItemList={borrarItem}
          />
        ))}

        <div className="d-grid gap-2">
          <Button
            variant="info"
            className="mt-3"
            size="lg"
            onClick={addItemListToBase}
          >
            {" "}
            Agregar Lista a Propiedad!{" "}
          </Button>
        </div>
      </Panel>
    </div>
  );
};

export default ItemsControlPage;
