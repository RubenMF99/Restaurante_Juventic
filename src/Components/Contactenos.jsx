import React,{useState,useRef} from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
const Contactenos = () => {

    const [Error, UpdateError] = useState(false);
    const [Contacto,UpdateContacto] = useState({
        Asunto: "",
        Nombre: "",
        Email: "",
        Servicio: "",
        Comentario:"",
      });
      const Contenedor = styled.legend`
      position: relative;
      z-index: 0; 
      display: inline-block;
      width: auto;
      left: 500px;
      margin-bottom: 40px;
      font-family: 'Work Sans', sans-serif;
      &::before{
         position: absolute;
         content: '';
         width: calc(120% );
         display: block;
         background-color:#F26A8D;
         height: 40px;
         z-index:-1;
         left: -30px;
         right: -30px;
         transform: rotate(-1deg);
         transition: transform .3s ease;
      }
      &:hover::before{
           transform: rotate(2deg);
     }
   `;
   const {Asunto,Nombre,Email,Servicio,Comentario} = Contacto;
   const form = useRef();
   const handleChangeSugerencia = (e) =>{
       UpdateContacto({
           ...Contacto,
           [e.target.name]:e.target.value,
       });
   }
  const SubmitForm = e =>{
       e.preventDefault();
       if(Asunto.trim()==='' || Nombre.trim()==='' ||  Email.trim()==='' || Servicio.trim()==='' || Comentario.trim()===''){
         UpdateError(true);
         return;
     }
          UpdateError(false);
          emailjs.sendForm('service_y6b6bfd', 'template_46l7xzy', form.current, 'user_JKFfDcN7JbJqibJfdxE19').then((result) => {
              success();
          }, (error) => {
             alert(error.message);
              });
              e.target.reset();
            
              UpdateContacto({
                Asunto: "",
                Nombre: "",
                Email: "",
                Servicio: "",
                Comentario:"",
              });
   }

   const success = ()=>{
     swal({
     title: "Perfecto Reserva Exitosa",
     text: "Sal&Sal",
     icon: "success",
     button: "Cerrar",
     });
 }
     const Advertencia = ()=>{
         swal({
         title: "Todos los campos son obligatorios",
         text: "Sal&Sal",
         icon: "warning",
         button: "Cerrar",
         });
     }
    return ( 

        <div>
        {Error ? Advertencia() :null}
       <div className="container">
           <div className="row">
               <form 
                ref={form} 
                className ="col card text-dark bg-transparent mb-5 pt-5 pb-2"
                onSubmit={SubmitForm}
              >
                   <fieldset>
                       <Contenedor>Contactanos...</Contenedor>
                       <div className="row">
                       <div className="col-md-4">
                               <div className="form-group">
                                   <label className="m-4">Asunto</label>
                                   <input 
                                   type="text"
                                   className="form-control"
                                   name="Asunto"
                                   placeholder="Asunto"
                                   onChange={handleChangeSugerencia}
                                   value={Asunto}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                               <div className="form-group">
                                   <label className="m-4">Nombre</label>
                                   <input 
                                   type="text"
                                   className="form-control"
                                   name="Nombre"
                                   placeholder="Nombre"
                                   onChange={handleChangeSugerencia}
                                   value={Nombre}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                                   <label htmlFor="email" className="m-4">Email</label>
                                   <input 
                                   type="email"
                                   className="form-control"
                                   name="Email"
                                   placeholder="Tu Email"
                                   onChange={handleChangeSugerencia}
                                   value={Email}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                           <label htmlFor="exampleFormControlSelect1" className="m-4">Seleccione servicio</label>
                            <select 
                            className="form-control" 
                            onChange={handleChangeSugerencia}
                            value={Servicio}
                            name="Servicio"
                            >
                            <option selected disabled value="">....Selecciona...</option>
                                <option>Celebracion de cumpleaños</option>
                                <option>Aniversario</option>
                                <option>Fiesta infantil</option>
                                <option>Declaracion o propuesta</option>
                                <option>Despedida</option>
                                <option>Cena con amigos</option>
                            </select>
                               </div>
                           </div>
                           
                            <div className="col-md-8">
                            <div className="form-group">
                                    <label className="m-4">Comentario o Sugerencia</label>
                                    <textarea 
                                    onChange={handleChangeSugerencia}
                                    value={Comentario}
                                     className="form-control " 
                                     placeholder="Ingresa Comentario o sugerencia" 
                                     name="Comentario"
                                    ></textarea>
               
                                </div>
                            </div>
                 </div>
                         <Link to={'/'} className='btn btn-danger m-4 '>Volver</Link>
                        <button type="submit" className=" btn  btn-primary m-4" >Enviar</button>
                   </fieldset>

               </form>
           </div>
       </div>
   </div>
    
     );
}
 
export default Contactenos;