import React, { useRef } from "react";
import { Button, Col, Form, Row, InputGroup, Control } from "react-bootstrap";
import useFormContext from "../../Hooks/useFormContext";

export default function ThirdStage() {
  const { publication, handleChange } = useFormContext();
  const ref = useRef(publication);

  return (
    <div>
      <Form className="mh-100">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>3 - Detalle de la Propiedad</b>
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBedroom">
          <Form.Label>
            <b>Dormitorios:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="cantDormitorios"
                value="1"
                checked={publication.cantDormitorios === "1"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="cantDormitorios"
                value="2"
                checked={publication.cantDormitorios === "2"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3"
                name="cantDormitorios"
                value="3"
                checked={publication.cantDormitorios === "3"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="4 o +"
                name="cantDormitorios"
                value="4++"
                checked={publication.cantDormitorios === "4++"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" Id="formBathroom">
          <Form.Label>
            <b>Baños:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="cantBanos"
                value="1"
                checked={publication.cantBanos === "1"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="cantBanos"
                value="2"
                checked={publication.cantBanos === "2"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3 o +"
                name="cantBanos"
                value="3++"
                checked={publication.cantBanos === "3++"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" id="formGaraje">
          <Form.Label>Garaje:</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="garaje"
                value="1"
                checked={publication.garaje === "1"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2 o +"
                name="garaje"
                value="2++"
                checked={publication.garaje === "2++"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" id="formSeaview">
          <Form.Label>
            <b>Vista al Mar:</b>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Si"
                name="vistaAlMar"
                value="Si"
                checked={publication.vistaAlMar === "Si"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="No"
                name="vistaAlMar"
                value="No"
                checked={publication.vistaAlMar === "No"}
                onChange={handleChange}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" id="formDistance">
          <Form.Label>
            <b>Distancia al Mar:</b>
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="w-50 "
            name="distanciaAlMar"
            value={publication.distanciaAlMar}
            onChange={handleChange}
          >
            <option>Sin Descripcion</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="750">750</option>
            <option value="1000++">1000 o +</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" id="formDesc">
          <Form.Label>
            <b>Camas:</b>
          </Form.Label>
          <div className="row">
            <div className="col-2">
              <Form.Label htmlFor="inputDouble">2 Plazas</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  id="inputDouble"
                  name="dosPlazas"
                  value={publication.dosPlazas}
                  onChange={handleChange}
                  aria-describedby="formDesc"
                  className="input-group-addon"
                />
              </InputGroup>
            </div>
            <div className="col-2">
              <Form.Label htmlFor="inputSingle">1 Plaza</Form.Label>
              <Form.Control
                type="number"
                id="inputSingle"
                name="unaPlaza"
                aria-describedby="formDesc"
                value={publication.unaPlaza}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputSofa">Sofa Cama</Form.Label>
              <Form.Control
                type="number"
                id="inputSofa"
                aria-describedby="formDesc"
                name="sofaCama"
                value={publication.sofaCama}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputMattress">Colchon</Form.Label>
              <Form.Control
                type="number"
                id="inputMattress"
                aria-describedby="formDesc"
                name="colchon"
                value={publication.colchon}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <Form.Label htmlFor="inputBunk">Cucheta</Form.Label>
              <Form.Control
                type="number"
                id="inputBunk"
                aria-describedby="formDesc"
                name="cucheta"
                value={publication.cucheta}
                onChange={handleChange}
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
