import React from 'react';

const Comentarios = ({comentariosRes}) => {
    return ( 
            <div className="media">
              <img src={comentariosRes.url} width="64" height="64" alt=""></img>
              <div className="media-body text-left">
                <p className="nombre">{comentariosRes.nombre}<span>{comentariosRes.fecha}</span></p>
                <p className="comentario">{comentariosRes.comentario}</p>
                <div className="botones text-right">
                  <a href="">Editar</a>
                  <a href="">Borrar</a>
                </div>
              </div>
            </div>
     );
}
 
export default Comentarios;