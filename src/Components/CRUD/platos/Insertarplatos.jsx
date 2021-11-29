
import React,{useState} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';

const Insertarplatos = ()=>{

    const [plato,updatePlato] = useState({
        idplato:Math.floor(Math.random() * (100000 - 1)) + 1,
        nombre: "",
        descripcion: "",
        idrestaurante: 1,
        imagen: "",
        precio:"",
  });
  const [error, UpdateError] = useState(false);
    const {
      idplato,
      nombre,
      descripcion,
      imagen,
      precio,
      } = plato;
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
    const handleChangePlato = (e) => {
      updatePlato({
        ...plato,
        [e.target.name]: e.target.value,
      });
    };
  const Insertarplatos = async ()=>{
    await  axios.post("http://localhost:9193/api/plato",plato).then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    const SubmitForm = (e) => {
      e.preventDefault();
      if (
        nombre.trim() === "" ||
        imagen.trim() === "" ||
        descripcion.trim() === ""||
        precio.trim() === "" 
      ) {
          UpdateError(true);
        return;
      }
      UpdateError(false);
      //Insertamos
      Insertarplatos();
      updatePlato({
        idplato:Math.floor(Math.random() * (100000 - 1)) + 1,
        nombre: "",
        descripcion: "",
        idrestaurante: 1,
        imagen: "",
        precio:"",
      });
    };
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
              <Contenedor>Insertar Plato...</Contenedor>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Nombre"
                      onChange={handleChangePlato}
                      value={nombre}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="form-group">
                  <label className="m-4">Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    name="precio"
                    placeholder="Precio"
                    onChange={handleChangePlato}
                    value={precio}
                  />
                </div>
              </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imagen"
                      placeholder="URL"
                      onChange={handleChangePlato}
                      value={imagen}
                    />
                  </div>
                </div>
              
                <div className="col-md-8">
                  <div className="form-group">
                    <label className="m-4">Descripcion</label>
                    <textarea
                      onChange={handleChangePlato}
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


export default Insertarplatos;