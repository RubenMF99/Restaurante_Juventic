import React,{useState} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';

const Insertar = () => {
    const [cliente,updateCliente] = useState({
        cedula:"",
        nombre:"",
        descripcion:"",
        telefono:"",
        usuario:"",
        password:""
    });
    const [error, UpdateError] = useState(false);
    const {
        cedula,
        nombre,
        descripcion,
        telefono,
        usuario,
        password,
      } = cliente;
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
      const handleChangeUser = (e) => {
        updateCliente({
          ...cliente,
          [e.target.name]: e.target.value,
        });
      };
    const insertarCliente = async ()=>{
        axios.post("http://localhost:9193/api/cliente",cliente).then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error.message)
        })
      }
      const SubmitForm = (e) => {
        e.preventDefault();
        if (
          cedula.trim() === "" ||
          nombre.trim() === "" ||
          telefono.trim() === "" ||
          descripcion.trim() === "" ||
          usuario.trim() === "" ||
          password.trim() === ""
        ) {
            UpdateError(true);
          return;
        }
        UpdateError(false);
        //Insertamos
        insertarCliente();
        updateCliente({
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
    return ( 
        <div>
         {error ? (
        <p className="alert alert-danger text-center">
          Todos lo campos son obligatorios
        </p>
      ) : null}
        <div className="container getuser">
          <div className="row">
            <form
              className="col card text-dark bg-transparent mb-5 pt-5 pb-2"
              onSubmit={SubmitForm}
            >
              <fieldset>
                <Contenedor>Insertar Cliente...</Contenedor>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="m-4">Cedula</label>
                      <input
                        type="number"
                        className="form-control"
                        name="cedula"
                        placeholder="Cedula"
                        onChange={handleChangeUser}
                        value={cedula}
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
                        onChange={handleChangeUser}
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
                        onChange={handleChangeUser}
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
                        onChange={handleChangeUser}
                        value={usuario}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="password" className="m-4">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        name="passwoed"
                        placeholder="Contraseña"
                        onChange={handleChangeUser}
                        value={password}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label className="m-4">Descripcion</label>
                      <textarea
                        onChange={handleChangeUser}
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
              </fieldset>
            </form>
          </div>
        </div>
      </div> );
}
 
export default Insertar;