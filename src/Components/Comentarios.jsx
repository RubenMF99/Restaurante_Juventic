import axios from "axios";
import React from "react";

const Comentarios = ({ comentariosRes,updatestado }) => {

  const borrarComentario = async (e)=>{
     await axios.delete(`http://localhost:9193/api/comentario/${e.idcomentario}`).then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
      updatestado(true);
  }
  return (
    <div className="media">
      <img src={comentariosRes.imagen} width="64" height="64" alt=""></img>
      <div className="media-body text-left">
        <p className="nombre">
          {comentariosRes.nombre}
        </p>
        <p className="comentario">{comentariosRes.comentario}</p>
        <div className="botones text-right">
          <button className="btn btn-danger" onClick={()=>borrarComentario(comentariosRes)}>Borrar</button>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
