import React,{useState} from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label} from 'reactstrap';
const Productos = ({MuestraMenuRes,setcarrocompra,carrocompra}) => {
  const [isOpen, setisOpen] = useState(false);
  const showModal = () => {
    setisOpen(true);
  };
  const CloseModal = () => {
    setisOpen(false);
  };
 const AgregarProducto = ()=>{
  // const plato = carrocompra.filter(plato=>plato.id === MuestraMenuRes.id);
      setcarrocompra([...carrocompra,...MuestraMenuRes]);
 }

    return (  
      <div className="card col-md-5 m-lg-4">
        <img src={MuestraMenuRes.url} className="card-img-top img-responsive center-d-inline-block"/>
        
        <div className="card-body">
          <p className="card-text">{MuestraMenuRes.nombre}</p>
          <p className="card-text">{MuestraMenuRes.descripcion}</p>
        </div>

        <div className="card-footer">
         <>
         <Button className="btn btn-success" onClick={showModal}>
             Ver Plato
         </Button>
        <Modal isOpen={isOpen}>
          <ModalHeader>
            Encabezado
          </ModalHeader>
          <ModalBody>
            <FormGroup>  
              <div className="gmodal justify-content-center row">
                 <img src={MuestraMenuRes.url} className="center-d-inline-block " /> 
                  </div>
            </FormGroup>
            <FormGroup>
            <Label>{MuestraMenuRes.nombre}</Label> 
            {MuestraMenuRes.descripcion}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button className="btn-danger"onClick={CloseModal}>
             Cerrar
         </Button >
          <Button onClick={AgregarProducto} className='btn btn-success m-4'>Agregar al carrito</Button>
          </ModalFooter>
        </Modal>
        </>
          
        </div>
      </div>
    );
}

export default Productos;