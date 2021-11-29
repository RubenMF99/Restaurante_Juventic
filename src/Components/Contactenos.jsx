import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styled from "@emotion/styled";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";
const Contactenos = () => {
  const [Error, UpdateError] = useState(false);
  const [Contacto, UpdateContacto] = useState({
    Idsugerencia:Math.floor(Math.random() * (100000 - 1)) + 1,
    Asunto: "",
    Cedula: "",
    Email: "",
    Servicio: "",
    Sugerencia: "",
  });
  const Contenedor = styled.legend`
    position: relative;
    z-index: 0;
    display: inline-block;
    width: auto;
    left: 500px;
    margin-bottom: 40px;
    font-family: "Work Sans", sans-serif;
    &::before {
      position: absolute;
      content: "";
      width: calc(120%);
      display: block;
      background-color: #f26a8d;
      height: 40px;
      z-index: -1;
      left: -30px;
      right: -30px;
      transform: rotate(-1deg);
      transition: transform 0.3s ease;
    }
    &:hover::before {
      transform: rotate(2deg);
    }
  `;
  const Agregarsugerencia = async()=>{
    const url =`http://localhost:9193/api/sugerencia`;
    await axios.post(url,Contacto);
  }
  const { Asunto, Idsugerencia,Cedula, Email, Servicio, Sugerencia } = Contacto;
  const form = useRef();
  const handleChangeSugerencia = (e) => {
    UpdateContacto({
      ...Contacto,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      Asunto.trim() === "" ||
      Cedula.trim() === "" ||
      Email.trim() === "" ||
      Servicio.trim() === "" ||
      Sugerencia.trim() === ""
    ) {
      UpdateError(true);
      return;
    }
    UpdateError(false);
    emailjs
      .sendForm(
        "service_y6b6bfd",
        "template_46l7xzy",
        form.current,
        "user_JKFfDcN7JbJqibJfdxE19"
      )
      .then(
        (result) => {
          success();
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
    Agregarsugerencia();

    UpdateContacto({
      Idsugerencia:Math.floor(Math.random() * (100000 - 1)) + 1,
      Asunto: "",
      Cedula: "",
      Email: "",
      Servicio: "",
      Sugerencia: "",
    });
  };

  const success = () => {
    swal({
      title: "Perfecto Reserva Exitosa",
      text: "Sal&Sal",
      icon: "success",
      button: "Cerrar",
    });
  };
  const Advertencia = () => {
    swal({
      title: "Todos los campos son obligatorios",
      text: "Sal&Sal",
      icon: "warning",
      button: "Cerrar",
    });
  };
  return (
    <div>
      {Error ? Advertencia() : null}
      <div className="container">
        <div className="row">
          <form
            ref={form}
            className="col card text-dark bg-transparent mb-5 pt-5 pb-2"
            onSubmit={SubmitForm}
          >
            <fieldset>
              <Contenedor>Contactanos...</Contenedor>
              <div className="row">
              <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Idreserva</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Idsugerencia"
                      value={Idsugerencia}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Asunto</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Asunto"
                      placeholder="Asunto"
                      onChange={handleChangeSugerencia}
                      value={Asunto}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Cedula</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Cedula"
                      placeholder="Identificacion"
                      onChange={handleChangeSugerencia}
                      value={Cedula}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="email" className="m-4">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      placeholder="Tu Email"
                      onChange={handleChangeSugerencia}
                      value={Email}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" className="m-4">
                      Seleccione servicio
                    </label>
                    <select
                      className="form-control"
                      onChange={handleChangeSugerencia}
                      value={Servicio}
                      name="Servicio"
                    >
                      <option selected disabled value="">
                        ....Selecciona...
                      </option>
                      <option>Celebracion de cumpleaños</option>
                      <option>Aniversario</option>
                      <option>Fiesta infantil</option>
                      <option>Declaracion o propuesta</option>
                      <option>Despedida</option>
                      <option>Cena con amigos</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="form-group">
                    <label className="m-4">Comentario o Sugerencia</label>
                    <textarea
                      onChange={handleChangeSugerencia}
                      value={Sugerencia}
                      className="form-control "
                      placeholder="Ingresa Comentario o sugerencia"
                      name="Sugerencia"
                    ></textarea>
                  </div>
                </div>
              </div>
              <Link to={"/"} className="btn btn-danger m-4 ">
                Volver
              </Link>
              <button type="submit" className=" btn  btn-primary m-4">
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
