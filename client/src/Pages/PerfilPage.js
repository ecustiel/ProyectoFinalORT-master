import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Panel } from "rsuite";
import { useAuthStore } from "../Hooks/useAuthStore";
import { useForm } from "../Hooks/useForm";
import { Toast } from "../Helpers/SwalHelpers";
import "./PerfilPage.css";

let uid = "";

export default function PerfilPage() {
  const [usuarios, setUsuarios] = useState([]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [celnumber, setCelnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toConfirm, setToConfirm] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { updateProfile, getUser } = useAuthStore();

  const letsGetUser = async () => {
    const res = await getUser();
    setUsuarios(res);

    res.find((item) => {
      if (item._id === user.uid) {
        setName(item.name);
        setSurname(item.surname);
        setAddress(item.address);
        setCelnumber(item.celNumber);
        setCity(item.city);
        setEmail(item.email);
        setToConfirm(true);
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    letsGetUser();
  }, []);

  //Funcion para Actualizar!
  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== "") {
      if (password !== confirmPassword) {
        Toast.fire({
          icon: "error",
          title: "Las contraseñas no coinciden! Verifique!",
        });
        return;
      }
    }
    uid = user.uid;
    const result = await updateProfile({
      uid,
      name,
      surname,
      address,
      city,
      celnumber,
      email,
      //password,
    });

    if (result) {
      Toast.fire({
        icon: "success",
        title: "Datos Actualizados Correctamente!",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "No se pudieron actualizar los datos! Verifique!",
      });
    }
  };

  return (
    <div>
      <Panel className="panel-perfil" shaded>
        <Row className="profileContainer">
          <Col md={12}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  //ref={nombre}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="surname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="surname"
                  placeholder="Apellido"
                  value={surname}
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Direccion"
                  value={address}
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="city"
                  placeholder="Ciudad"
                  value={city}
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="celnumber">
                <Form.Label>Numero Celular</Form.Label>
                <Form.Control
                  type="celnumber"
                  placeholder="Celular"
                  value={celnumber}
                  name="celnumber"
                  onChange={(e) => setCelnumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirme Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              <Button type="submit" className="mt-2" varient="primary">
                Actualizar Informacion
              </Button>
            </Form>
          </Col>
        </Row>
      </Panel>
    </div>
  );
}
