import React,{useState} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {

  const [cliente,updateCliente] = useState({
    Cedula:"",
    nombre: "",
    descripcion: "",
    telefono: "",
    usuario: "",
    password:"",
});
const [error, UpdateError] = useState(false);
      const {
        Cedula,
        nombre,
        descripcion,
        telefono,
        usuario,
        password,
        } = cliente;
  const handleChangeCliente = (e) => {
          updateCliente({
            ...cliente,
            [e.target.name]: e.target.value,
          });
        };

  const registrarCliente = async ()=>{

    const url = `http://localhost:9193/api/cliente`;
    axios.post(url,cliente).then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const SubmitForm = (e) => {
    e.preventDefault();
    if (
      Cedula.trim()===""||
      nombre.trim() === "" ||
      telefono.trim() === "" ||
      usuario.trim() === "" ||
      password.trim()===""
    ) {
        UpdateError(true);
      return;
    }
    UpdateError(false);
    //Registramos cliente
    registrarCliente();
    updateCliente({
      Cedula:"",
      nombre: "",
      descripcion: "",
      telefono: "",
      usuario: "",
      password:"",
    });
  };
  const Contenedor = styled.legend`
      position: relative;
      z-index: 0;
      display: inline-block;
      width: auto;
      left: 500px;
      margin-bottom: 40px;
      margin-top: 40px;
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
  return (
    <div>
    {error ? (
   <p className="alert alert-danger text-center">
     Todos lo campos son obligatorios
   </p>
 ) : null}
   <div className="container getuser mb-5">
     <div className="row">
       <form
         className="col card text-dark bg-transparent mb-5 pt-5 pb-2"
         onSubmit={SubmitForm}
       >
         <fieldset>
           <Contenedor>Registrate..</Contenedor>
           <div className="row">
           <div className="col-md-4">
             <div className="form-group">
               <label className="m-4">Cedula</label>
               <input
                 type="number"
                 className="form-control"
                 name="Cedula"
                 placeholder="Cedula"
                 onChange={handleChangeCliente}
                 value={Cedula}
               />
             </div>
           </div>
             <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Nombre</label>
                 <input
                   type="text"
                   className="form-control"
                   name="nombre"
                   placeholder="Nombre"
                   onChange={handleChangeCliente}
                   value={nombre}
                 />
               </div>
             </div>
             <div className="col-md-4">
             <div className="form-group">
               <label className="m-4">Telefono</label>
               <input
                 type="number"
                 className="form-control"
                 name="telefono"
                 placeholder="Telefono"
                 onChange={handleChangeCliente}
                 value={telefono}
               />
             </div>
           </div>
           <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Usuario</label>
                 <input
                   type="text"
                   className="form-control"
                   name="usuario"
                   placeholder="Usuario"
                   onChange={handleChangeCliente}
                   value={usuario}
                 />
               </div>
               </div>
               <div className="col-md-4">
               <div className="form-group">
                 <label className="m-4">Usuario</label>
                 <input
                   type="password"
                   className="form-control"
                   name="password"
                   placeholder="Contraseña"
                   onChange={handleChangeCliente}
                   value={password}
                 />
               </div>
               </div>
               <div className="col-md-8">
                    <div className="form-group">
                      <label className="m-4">Descripcion</label>
                      <textarea
                        onChange={handleChangeCliente}
                        value={descripcion}
                        className="form-control "
                        placeholder="ingresa una descripcion"
                        name="descripcion"
                      ></textarea>
                    </div>
                  </div>
                </div>
           <button type="submit" className=" btn  btn-success m-4">
             Registrar
           </button>
           <Link to={"/"} className="btn btn-danger">
                Volver
              </Link>
         </fieldset>
       </form>
     </div>
     </div>
   </div>
  );
};

export default Register;