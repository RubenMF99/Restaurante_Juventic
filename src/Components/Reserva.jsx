import React, { useState, useRef } from "react";
import swal from "sweetalert";
import emailjs from "emailjs-com";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Reserva = () => {
  const [Error, UpdateError] = useState(false);
  const [Reserva, UpdateReserva] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
    Servicio: "",
    NumPer: "",
    Fecha: "",
    Hora: "",
    Indicaciones: "",
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
  const {
    Nombre,
    Telefono,
    Email,
    Servicio,
    NumPer,
    Fecha,
    Hora,
    Indicaciones,
  } = Reserva;
  const form = useRef();
  const handleChangeReserva = (e) => {
    UpdateReserva({
      ...Reserva,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      Nombre.trim() === "" ||
      Telefono.trim() === "" ||
      Email.trim() === "" ||
      Servicio.trim() === "" ||
      NumPer.trim() === "" ||
      Fecha.trim() === "" ||
      Hora.trim() === "" ||
      Indicaciones.trim() === ""
    ) {
      UpdateError(true);
      return;
    }
    UpdateError(false);
    emailjs
      .sendForm(
        "service_y6b6bfd",
        "template_jpcrwtc",
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
    //Limpimos el formulario
    UpdateReserva({
      Nombre: "",
      Telefono: "",
      Email: "",
      Servicio: "",
      NumPer: "",
      Fecha: "",
      Hora: "",
      Indicaciones: "",
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
              <Contenedor>Realizar Reserva</Contenedor>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Nombre"
                      placeholder="Nombre"
                      onChange={handleChangeReserva}
                      value={Nombre}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Telefono</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Telefono"
                      placeholder="Telefono"
                      onChange={handleChangeReserva}
                      value={Telefono}
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
                      onChange={handleChangeReserva}
                      value={Email}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Numero de personas</label>
                    <input
                      type="number"
                      className="form-control"
                      name="NumPer"
                      placeholder="Cantidad"
                      onChange={handleChangeReserva}
                      value={NumPer}
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
                      onChange={handleChangeReserva}
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Fecha</label>
                    <input
                      onChange={handleChangeReserva}
                      value={Fecha}
                      type="date"
                      name="Fecha"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Hora</label>
                    <input
                      onChange={handleChangeReserva}
                      value={Hora}
                      type="time"
                      name="Hora"
                      className="form-control mb-4"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <label className="m-4">Indicaciones</label>
                    <textarea
                      onChange={handleChangeReserva}
                      value={Indicaciones}
                      className="form-control "
                      placeholder="ingresa una indicación"
                      name="Indicaciones"
                    ></textarea>
                  </div>
                </div>
              </div>
              <Link to={"/servicios"} className="btn btn-danger m-4 ">
                Volver
              </Link>
              <button type="submit" className=" btn  btn-success m-4">
                Reservar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
