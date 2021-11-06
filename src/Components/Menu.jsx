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
                                {carrocompra.map((e)=>(
                                    e.url
                                ))}
                                </div>
                            </FormGroup>
                            <FormGroup>
                            <Label><p>Hola</p></Label> 
                            <p>Hola</p>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button className="btn-danger"onClick={CloseModal}>
                            Cerrar
                        </Button >
                        <Link to={'/compras'} className='btn btn-danger m-4 '>Volver</Link>
                        </ModalFooter>
                        </Modal>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button  className="Tipbutton btn btn-primary m-4">Menú descargable</button>
                    <Button  className="btn btn-success m-4" onClick={showModal}>
                             Carrito
                    </Button>
                </div>

                <h3 className="Titencabezado">Realiza pedidos en Línea</h3>

                <div className="Productall col-12 p-5 m-5 row">
                    {DateService.MuestraMenuRes.map((e)=>(
                        <Productos 
                            setcarrocompra={setcarrocompra}
                            carrocompra={carrocompra}
                            MuestraMenuRes={e} key={e.id}/>   
                    ))}
                </div>       
            </div>
        </div>
    );
}

export default Menu;