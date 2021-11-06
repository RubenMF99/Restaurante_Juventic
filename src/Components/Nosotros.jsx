import React,{Fragment} from 'react';
import DateService from '../utils/datos.json'
import Roles from './roles';
import styled from '@emotion/styled';
import Comentario from './Comentarios';
const Nosotros = () => {

  const Contenedor = styled.div`
      background-color: #CBEEF3;
      display:flex;
      flex-wrap: wrap ;
`;

    return ( 
      <Fragment>
        <section id="historia">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Flogo.png?alt=media&token=95fe0f42-ec7d-464a-ad41-8cabcdd30303" class= "rounded img-fluid" width="100%"/>
                  </div>

                  <div className="col-md-6 my-auto">
                    <h1>Nuestra Historia</h1>
                    <p className= "mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eligendi soluta ipsum enim rem dolorem ipsa doloremque eum, corrupti delectus sapiente hic ex temporibus, est, eveniet doloribus! Enim dignissimos saepe excepturi dolor quam sequi reprehenderit commodi voluptatum beatae deleniti eveniet et doloremque adipisci animi harum quibusdam, repudiandae maxime unde fugit illo est numquam accusantium magni. Dolorum molestiae quo repellendus ducimus nihil excepturi voluptates numquam ab esse nostrum ex, quis ad, in dolores possimus! Libero at eos ex dolorum quod nulla!</p>
                  </div>
                </div>
              </div>
            </section>  

      <Contenedor>
                      { DateService.Nosotros.map((e)=>(      
                              <Roles
                                  roles={e} key={e.id}   
                              />   
                          ))}
                      
      </Contenedor>
      <div className="container">
        <div className="row comentarios justify-content-center">
          <h3 className="mt-5">Comentarios</h3>
          <div className="col-6">
            <form action="" className="form_comentarios d-flex justify-content-end flex-wrap">
              <textarea name="" className="mt-5" placeholder="Danos tu opinion"></textarea>
              <button className="btn" type="button">Comentar</button>
            </form>
         {DateService.ComentariosRes.map((e)=>(
            <Comentario
            comentariosRes={e} key={e.id}
            />))}
         </div>
       </div>
      </div>
     </Fragment>
        );
}
 
export default Nosotros;