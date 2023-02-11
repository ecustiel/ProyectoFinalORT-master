import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./ItemsQuantityAndPrice.css";

const ItemsQuantityAndPrice = ({ addItemFun, idPublicacion, contador }) => {
  //Lista de Items
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [cont, setCont] = useState(contador);
  const [idPublicacionToSend, setIdPublicacionToSend] = useState(idPublicacion);

  const addItem = (_) => {
    addItemFun({
      id: idPublicacion,
      cont: contador,
      nombre,
      cantidad,
      precio,
    });
    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  return (
    <div className="panel-izquierda-estilos">
      <Form.Group className="mb-3" id="title">
        <Form.Label>
          <strong>
            <h2>Lista de Productos</h2>
          </strong>
          <p>
            A continuacion, ingrese una lista de productos que seran asociados a
            la propiedad que eligio. Esto luego servira de Control a la hora de
            que la propiedad sea entregada devuelta!
          </p>
        </Form.Label>
        <Form.Label>
          <strong>Nombre del Item:</strong>
        </Form.Label>
        <Form.Control
          name="name"
          placeholder="Ej: Heladera"
          id="name"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <Form.Label>
          <strong>Cantidad:</strong>
        </Form.Label>
        <Form.Control
          name="quantity"
          placeholder="Ej: 1"
          id="quantity"
          value={cantidad}
          onChange={(e) => {
            setCantidad(e.target.value);
          }}
        />

        <Form.Label>
          <strong>Precio (Por Unidad):</strong>
        </Form.Label>
        <Form.Control
          name="price"
          placeholder="Ej: 12000"
          id="price"
          value={precio}
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
        />

        <Button variant="success" className="mt-3" onClick={addItem}>
          {" "}
          Agregar Item!{" "}
        </Button>
      </Form.Group>
    </div>
  );
};

export default ItemsQuantityAndPrice;
