import { useState, useContext, useRef } from "react";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import useFormContext from "../../Hooks/useFormContext";

export default function FirstStep() {
  const { publication, handleChange } = useFormContext();

  const ref = useRef(publication);

  return (
    <div>
      <Form className="mh-100">
        <Form.Group className="mb-3" id="title">
          <Form.Label>
            <strong>Titulo de la Publicacion</strong>
          </Form.Label>
          <Form.Control
            name="title"
            placeholder="Inserte el Titulo"
            id="title"
            ref={ref.title}
            value={publication.title}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="mb-3 bg-secondary bg-opacity-50 border border-dark border-1 rounded">
          <span className="mb-3 p-4">
            <strong>Definicion de Temporadas:</strong>
          </span>

          <div className="ps-5">
            <p>
              <strong>Alta:</strong> Diciembre, Enero, Febrero, Semana Santa,
              Semana Carnaval
            </p>
            <p>
              <strong>Media:</strong> Marzo, Vacaciones Julio
            </p>
            <p>
              <strong>Baja:</strong> Resto del Año
            </p>
          </div>
        </div>
        <hr />

        <Form.Group id="Primero">
          <Row>
            <Col className="justify-content-center">
              <Form.Control
                readOnly
                placeholder="Temporada Alta"
                aria-label="Default select example"
                className="w-50 mx-auto text-center"
                name="temp1"
                id="temp1"
                ref={ref.temp1}
                value={publication.temp1}
              />
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  id="pric1"
                  aria-label="Amount (to the nearest dollar)"
                  name="pric1"
                  ref={ref.pric1}
                  value={publication.pric1}
                  onChange={handleChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group Id="Segundo" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Control
                readOnly
                placeholder="Temporada Media"
                aria-label="Default select example"
                className="w-50 mx-auto text-center"
                name="temp2"
                id="temp2"
                ref={ref.temp2}
                value={publication.temp2}
              />
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  id="pric2"
                  aria-label="Amount (to the nearest dollar)"
                  name="pric2"
                  value={publication.pric2}
                  onChange={handleChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group Id="Tercero" className="mt-2">
          <Row>
            <Col className="justify-content-center">
              <Form.Control
                readOnly
                placeholder="Temporada Baja"
                aria-label="Default select example"
                className="w-50 mx-auto text-center"
                name="temp3"
                id="temp3"
                ref={ref.temp3}
                value={publication.temp3}
              />
            </Col>
            <Col>
              <InputGroup className="pe-5 w-75">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder="Prexio x Dia"
                  id="pric3"
                  aria-label="Amount (to the nearest dollar)"
                  name="pric3"
                  value={publication.pric3}
                  onChange={handleChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
