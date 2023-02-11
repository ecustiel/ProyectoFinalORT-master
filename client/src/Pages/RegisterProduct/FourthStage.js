import React from "react";
import MultiSelectConfort from "./MultiSelectConfort";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import MultiSelectSeguridad from "./MultiSelectSeguridad";

export default function FourthStage() {
  return (
    <>
      <Form className="vh-75">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>4 - Confort</b>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBedroom">
          <Form.Label>
            <b>Opciones de Confort:</b>
          </Form.Label>
          <MultiSelectConfort />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBedroom">
          <Form.Label>
            <b>Opciones de Seguridad:</b>
          </Form.Label>
          <MultiSelectSeguridad />
        </Form.Group>
        <div className="toFix"></div>
      </Form>
    </>
  );
}
