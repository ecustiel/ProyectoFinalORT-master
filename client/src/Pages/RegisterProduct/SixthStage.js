import React from "react";
import {
  Button,
  Col,
  Form,
  Row,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import useFormContext from "../../Hooks/useFormContext";

export default function SixthStage() {
  const { publication, handleChange } = useFormContext();

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>
          <b>6 - Descripcion de la Propiedad</b>
        </Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="descripcionPropiedad"
          placeholder="Describa su Propiedad"
          style={{ height: "450px" }}
          value={publication.descripcionPropiedad}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}
