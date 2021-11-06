import React,{useState} from 'react';
import DateService from '../utils/datos.json';
import Productos from './Productos';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
const Menu = () => {
    const [carrocompra, setcarrocompra] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    const showModal = () => {
      setisOpen(true);
    };
    const CloseModal = () => {
      setisOpen(false);
    };
    const vaciar = () =>{
        setcarrocompra([]);
    }
    var id;
    const eliminarPlato = ()=>{
        let auxi = carrocompra.findIndex(indice =>{
            return indice.id === id;
        });
        carrocompra.splice(auxi,1);
    }
    return  (
        <div className="container">

            <div className="row justify-content-center">
                <h2 className="titulomenu mt-5 mb-5 m-lg-5 col-md-9 display-2">Animate a probar nuestros platillos</h2>
                <div className="col-md-12 mb-5">
                    <p className="titulomenu text-justify-content-center blockquote">Tenemos gran variedad de platos para todos los gustos</p>
                       
                        <Modal isOpen={isOpen}>
                        <ModalHeader>
                            Platillos
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>  
                            <div className="col-10 justify-content-center row">
                                {
                               carrocompra.length===0
                               ?
                                 <p className="text-center blockquote">No hay elementos</p>
                               : 
                                carrocompra.map(plato =>(
                                    <div>
                                   <table  className="table">
                                  <thead>
                                      <tr>
                                          <th><img src={plato.url} height="70px" width="70px"></img> </th>
                                          <th><p> Nombre: <br/> {plato.nombre}</p></th>
                                          <th><p> Precio:<br/> {plato.precio}</p></th>
                                          <th><Button onClick={eliminarPlato}>X</Button></th>  
                                      </tr>
                                  </thead>
                                  <tbody></tbody>
                              </table>
                              </div>
                                ))}
                                </div>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button className="btn-primary"onClick={CloseModal}>
                            Cerrar
                        </Button >
                        <Button className="btn-danger"onClick={vaciar}>
                            Vaciar Carrito
                        </Button >
                        <Link to={'/compras'} className='btn btn-success m-4 '>Comprar</Link>
                        </ModalFooter>
                        </Modal>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button  className="Tipbutton btn btn-primary m-4">Menú descargable</button>
                    <img  src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Fcart-regular-24.png?alt=media&token=8f7226e1-cb3d-487f-9575-09f7a686a453"className="m-4" onClick={showModal}></img>
                </div>

                <h3 className="Titencabezado">Realiza pedidos en Línea</h3>

                <div className="Productall col-12 p-5 m-5 row">
                    {DateService.MuestraMenuRes.map((e)=>(
                        <Productos 
                             carrocompra={carrocompra}
                            setcarrocompra={setcarrocompra}
                            MuestraMenuRes={e} key={e.id}/>   
                    ))}
                </div>       
            </div>
        </div>
    );
}

export default Menu;