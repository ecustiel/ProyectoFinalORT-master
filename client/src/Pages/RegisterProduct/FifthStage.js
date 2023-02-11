import React from "react";
import ImgUploader from "./ImgUploader";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import useFormContext from "../../Hooks/useFormContext";

export default function FifthStage() {
  const { publication, handleChange } = useFormContext();

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>
            <b>5 - Gestion de Imagenes</b>
          </Form.Label>
        </Form.Group>
        <ImgUploader id="imgToPublication" />
        <hr />
        <div>
          <Form.Label>
            <b>Extras - (Inserte un Link de Youtube si lo desea)</b>
          </Form.Label>
          <Form.Control
            id="youtubeVideo"
            name="youtubeVideo"
            aria-describedby="formDesc"
            className="w-50"
            value={publication.youtubeVideo}
            onChange={handleChange}
          />
        </div>
      </Form>
    </>
  );
}
