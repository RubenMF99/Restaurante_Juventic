import React from "react";

const Comentarios = ({ comentariosRes }) => {
  return (
    <div className="media">
      <img src={comentariosRes.url} width="64" height="64" alt=""></img>
      <div className="media-body text-left">
        <p className="nombre">
          {comentariosRes.nombre}
          <span>{comentariosRes.fecha}</span>
        </p>
        <p className="comentario">{comentariosRes.comentario}</p>
        <div className="botones text-right">
          <button>Editar</button>
          <button>Borrar</button>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
