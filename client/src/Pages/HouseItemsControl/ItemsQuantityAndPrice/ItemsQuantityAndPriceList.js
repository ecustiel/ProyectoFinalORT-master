import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ItemsQuantityAndPriceList.css";

const ItemsQuantityAndPriceList = ({ item, borrarItemList }) => {
  const borrarItem = (_) => borrarItemList(item);

  return (
    <div>
      <Form.Label>
        <strong>Item:</strong> {item.nombre} / <strong>Precio:</strong> u$s
        {item.precio} / <strong>Cant.:</strong> {""}
        {item.cantidad}
        <Button
          onClick={borrarItem}
          className="btn-eliminar"
          size="sm"
          variant="danger"
        >
          Borrar
        </Button>
      </Form.Label>
    </div>
  );
};

export default ItemsQuantityAndPriceList;
