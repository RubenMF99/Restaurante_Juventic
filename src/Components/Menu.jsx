import React, { useState,useEffect} from "react";
import Productos from "./Productos";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label
} from "reactstrap";

const Menu = () => {
  const [menu,updateMenu] = useState([]);
  const [carrocompra, setcarrocompra] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [compra,setcompra] = useState({
    Cantidad :'',
    email:''
  });
  emailjs.init("user_goyf5NOpfzueBGtIc5ZUd");
  const [totalcom,setTotal] = ('');
  const {Cantidad,email} = compra;
  const eliminarPlato = (plato) => {
    let aux = carrocompra.filter(e => e.id !== plato.id);
    setcarrocompra(aux);
  };
  const handleChangeCompra = e =>{
    setcompra({
      ...compra,
      [e.target.name]: e.target.value,
    });
  }
  const sendEmail = () =>{
    let lista,total;
    carrocompra.map(e =>{
       lista = `${e.nombre} --- `;
       total+= (e.precio*Cantidad)
    }
    );
    setTotal(total);
      var tempParams = {
        Email: "fghjk",
        platos: "dgfhjk",
        cantidad:"dfghhjnmk",
        Total:"dfghj",
    };
      emailjs.send("service_c88o4k5","template_ed7jz7h", tempParams).then(function (res) {
        success();
    })
  }
  const success = () => {
    swal({
      title: "Perfecto Reserva Exitosa",
      text: "Sal&Sal",
      icon: "success",
      button: "Cerrar",
    });
  };
 
  const ConsultarApi = async()=>{

    const url =`http://localhost:9193/api/plato`;
    const platos = await axios.get(url);
upstream/master
    updateMenu(platos.data);
  }
  useEffect(()=>{
    ConsultarApi();
  },[]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2 className="titulomenu mt-5 mb-5 m-lg-5 col-md-9 display-2">
          Animate a probar nuestros platillos
        </h2>
        <div className="col-md-12 mb-5">
          <p className="titulomenu text-justify-content-center blockquote">
            Tenemos gran variedad de platos para todos los gustos
          </p>

          <Modal isOpen={isOpen}>
            <ModalHeader>Platillos</ModalHeader>
            <ModalBody>
              <FormGroup>
                <div className="col-10 justify-content-center row">
                  {carrocompra.length === 0 ? (
                    <p className="text-center blockquote">No hay elementos</p>
                  ) : (
                    carrocompra.map((plato) => (
                      <div key={plato.id}>
                        <table className="table">
                          <thead>
                            <tr>
                              <th >
                                <img
                                  src={plato.url}
                                  alt="plato_foto"
                                  height="70px"
                                  width="70px"
                                  className="mr"
                                ></img>{" "}
                              </th>
                              <th >
                                <p >
                                  {" "}
                                  Nombre: <br /> {plato.nombre}
                                </p>
                              </th>
                              <th >
                                <p
                                >
                                  {" "}
                                  Precio:
                                  <br /> {plato.precio}
                                </p>
                              </th>
                              <th  >
                              <p className="mb-1"> {" "}
                                  Cantidad: </p> 
                                  <div className="col-md-12 mi mb-1 row">
                                   <input
                                    type="number"
                                    name ="Cantidad"
                                    value={Cantidad}
                                    onChange={handleChangeCompra}
                                     ></input>
                                   </div>
                              </th>
                              <th>
                                <Button  onClick={() => eliminarPlato(plato)}>
                                  X
                                </Button>
                              </th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                      </div>
                    ))
                  )}
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Correo Electronico</Label>
                <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Tu Email"
                      
                    />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button className="btn btn-primary" onClick={() => setisOpen(false)}>
                Cerrar
              </Button>
              <Button className="btn-danger" onClick={() => setcarrocompra([])}>
                Vaciar Carrito
              </Button >
              <Button  className ="btn-success" onClick={() => sendEmail}>
              Comprar
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Fcarrito.png?alt=media&token=ec551e7d-5049-44f4-a851-51430b25ba9f"
            alt="coso"
            height="70" widht="70"
            className="m-1"
            onClick={() => setisOpen(true)}
          ></img>
          <button className="Tipbutton btn btn-primary m-1" s>
            Menú descargable
          </button>
        </div>

        <h3 className="Titencabezado">Realiza pedidos en Línea</h3>

        <div className="Productall col-12 p-5 m-5 row">
          {menu.map((e) => (
            <Productos
              carrocompra={carrocompra}
              setcarrocompra={setcarrocompra}
              MuestraMenuRes={e}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
