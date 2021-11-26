import React,{useState,useEffect} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import {
  Button
} from "reactstrap";
const ConsultarUser = () => {
    const [user,updateUser] = useState([]);
    const [estadoeffect, updatestado] = useState(false);
    const ConsultarApi = async()=>{
        const url =`http://localhost:9193/api/empleado`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
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
      }
      &:hover::before {
        transform: rotate(2deg);
      }
    `;
      useEffect(()=>{
        ConsultarApi();
      },estadoeffect);
      
    const eliminarEmpleado = async (e)=>{
      axios.delete(`http://localhost:9193/api/empleado/${e.idempleado}`).then(res => {
        updatestado(true);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
      updatestado(false);
    }
    return ( 
        
        <div className="container  mb-5">
        <div className="row">
              <Contenedor>Lista de Empleados</Contenedor>
              {user.length === 0 ? (
                    <p className="text-center blockquote">No hay elementos</p>
                  ) :(
                    user.map((e)=>(
                <div key={e.idempleado}>
                   <table className="table">
                   <thead>  
                   
                         <tr>
                         <th >
                         <p >
                           {" "}
                           {e.idempleado} 
                         </p>
                       </th>
                       <th >
                         <p
                    
                         >
                           {" "}
                           {e.nombre}
                           <br /> 
                         </p>
                       </th>
                       <th >
                         <p
                         >
                           {" "}
                           {e.idrestaurante}
                           <br /> 
                         </p>
                       </th>
                       <th >
                                <img
                                  src={e.imagen}
                                  height="70px"
                                  width="70px"
                                  className="mr"
                                ></img>{" "}
                              </th>
                       <th >
                       <Button  onClick={() => eliminarEmpleado(e)}>
                                  X
                                </Button>
                       </th>
                     </tr>
                     </thead>
                 </table>
                 </div>
              
                    ))
                  )}
        </div>
      </div>
        );
}
 
export default ConsultarUser;