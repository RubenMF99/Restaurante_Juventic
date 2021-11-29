import React,{useState,useEffect} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import {
  Button
} from "reactstrap";
const Getservicio = ()=>{

    const [serviciores,updateServicio] = useState([]);
    const [estadoeffect, updatestado] = useState(true);
    const ConsultarApi = async()=>{
        const url =`http://localhost:9193/api/servicio`;
        const Listuser = await axios.get(url);
        updateServicio(Listuser.data);
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
      
    const eliminarServicio = async (e)=>{
     await axios.delete(`http://localhost:9193/api/servicio/${e.idservicio}`).then(res => {
        updatestado(true);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
      updatestado(false);
    }
    return ( 
        
        <div className="container getuser  mb-5">
        <div className="row">
              <Contenedor>Lista de Servicios</Contenedor>
              {serviciores.length === 0 ? (
                    <p className="text-center blockquote">No hay elementos</p>
                  ) :(
                    serviciores.map((e)=>(
                <div key={e.idservicio}>
                   <table className="table">
                   <tbody>  
                         <tr>
                         <td >
                           {"Id: "}
                           {e.idservicio} 
                       </td>
                       <td >
                           {"Nombre: "}
                           {e.nombreser}
                       </td>
                       <td >
                              {"Foto: "}
                                <img
                                  src={e.imagenser}
                                  height="70px"
                                  width="70px"
                                  className="mr"
                                ></img>{" "}
                        </td>
                       <td >
                       <Button className="btn-danger" onClick={() => eliminarServicio(e)}>
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
      </div>
        );
}


export default Getservicio;