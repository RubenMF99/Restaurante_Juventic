import React,{useState,useEffect} from 'react'
import styled from "@emotion/styled";
import axios from 'axios';
import {
  Button
} from "reactstrap";


const Getplatos = ()=>{
    const [platosres,updatePlato] =useState([]);
    const [estadoeffect, updatestado] = useState(true);
    const ConsultarApi = async()=>{
        const url =`http://localhost:9193/api/plato`;
        const Listuser = await axios.get(url);
        updatePlato(Listuser.data);
        console.log(Listuser.data);
      }
      const Contenedor = styled.legend`
      position: relative;
      z-index: 0;
      display: inline-block;
      width: auto;
      left: 500px;
      margin-bottom: 40px;
      margin-top: 40px;
      font-family: "Work Sans", sans-serif;
      &::before {
        position: absolute;
        content: "";
        width: calc(120%);
        display: block;
        background-color: #f26a8d;
        height: 40px;
        z-index: -1;
        left: -30px;
        right: -30px;
        transform: rotate(-1deg);
        transition: transform 0.3s ease;
        margin-botton:30px;
      }
      &:hover::before {
        transform: rotate(2deg);
      }
    `;
      useEffect(()=>{
        if(estadoeffect){
        ConsultarApi();
          updatestado(false);
      }
      },[estadoeffect]);
      
    const eliminarPlato = async (e)=>{
     await axios.delete(`http://localhost:9193/api/plato/${e.idplato}`).then(res => {
        updatestado(true);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
      updatestado(false);
    }



    return(  <div className="container getuser  mb-5">
    <div className="row">
          <Contenedor>Lista de Platos</Contenedor>
          {platosres.length === 0 ? (
                <p className="text-center blockquote">No hay elementos</p>
              ) :(
                platosres.map((e)=>(
            <div key={e.idempleado}>
               <table className="table">
               <tbody>  
                     <tr>
                     <td >
                       {"Precio: "}
                       {e.precio} 
                   </td>
                   <td >
                       {"Nombre: "}
                       {e.nombre}
                   </td>
                   <td >       
                       {"Id restaurante: "}
                       {e.idrestaurante}
                       
                   </td>
                   <td >
                            <img
                              src={e.imagen}
                              height="70px"
                              width="70px"
                              className="mr"
                            ></img>{" "}
                    </td>
                   <td >
                   <Button className="btn-danger" onClick={() => eliminarPlato(e)}>
                              X
                            </Button>
                   </td>
                 </tr>
                 </tbody>
             </table>
             </div>
          
                ))
              )}
    </div>
  </div>);
}


export default Getplatos;