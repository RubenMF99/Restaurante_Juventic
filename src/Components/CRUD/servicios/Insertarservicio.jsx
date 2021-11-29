
import React,{useState} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';


const Insertarservicio = ()=>{

    const [servicio,updateServicio] = useState({
        idservicio:Math.floor(Math.random() * (100000 - 1)) + 1,
        nombreser: "",
        descripcion: "",
        imagenser: "",
  });
  const [error, UpdateError] = useState(false);
    const {
      nombreser,
      descripcion,
      imagenser,
      } = servicio;
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
    const handleChangeServicio = (e) => {
      updateServicio({
        ...servicio,
        [e.target.name]: e.target.value,
      });
    };
  const Insertarservicio = async ()=>{
    await  axios.post("http://localhost:9193/api/servicio",servicio).then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    const SubmitForm = (e) => {
      e.preventDefault();
      if (
        nombreser.trim() === "" ||
        imagenser.trim() === "" ||
        descripcion.trim() === ""
      ) {
          UpdateError(true);
        return;
      }
      UpdateError(false);
      //Insertamos
      Insertarservicio();
      updateServicio({
        idservicio:Math.floor(Math.random() * (100000 - 1)) + 1,
        nombre: "",
        descripcion: "",
        imagenser: "",
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
              <Contenedor>Insertar Servicio...</Contenedor>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombreser"
                      placeholder="Nombre"
                      onChange={handleChangeServicio}
                      value={nombreser}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="m-4">Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      name="imagenser"
                      placeholder="URL"
                      onChange={handleChangeServicio}
                      value={imagenser}
                    />
                  </div>
                </div>
              
                <div className="col-md-8">
                  <div className="form-group">
                    <label className="m-4">Descripcion</label>
                    <textarea
                      onChange={handleChangeServicio}
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


export default Insertarservicio;