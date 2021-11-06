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
      const aux = carrocompra.find(e=> e.id ===MuestraMenuRes.id);
      if(aux) return;
      setcarrocompra([...carrocompra,MuestraMenuRes]);
     
 }
 

    return (  
      <div className="card col-md-5 m-lg-4">
        <img src={MuestraMenuRes.url} className="card-img-top img-responsive center-d-inline-block"/>
        
        <div className="card-body">
          <p className="card-text">Nombre: {MuestraMenuRes.nombre}</p>
          <p className="card-text"> Precio: {MuestraMenuRes.precio}</p>
        </div>

        <div className="Productall card-footer">
         <>
         <Button className="btn btn-success" onClick={showModal}>
             Ver Plato
         </Button>
        <Modal isOpen={isOpen}>
          <ModalHeader>
          <Label>{MuestraMenuRes.nombre}</Label> 
          </ModalHeader>
          <ModalBody>
            <FormGroup>  
              <div className="gmodal justify-content-center row">
                 <img src={MuestraMenuRes.url} className="center-d-inline-block " /> 
                  </div>
            </FormGroup>
            <FormGroup>
            {MuestraMenuRes.descripcion}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button className="btn-danger"onClick={CloseModal}>
             Cerrar
         </Button >
          <Button onClick={AgregarProducto()} className='btn btn-success m-4'>Agregar al carrito</Button>
          </ModalFooter>
        </Modal>
        </>
          
        </div>
      </div>
    );
}

export default Productos;