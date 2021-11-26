import React,{useState,useEffect} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import {
  Button
} from "reactstrap";
const ConsultarUser = () => {
    const [user,updateUser] = useState([]);
    const ConsultarApi = async()=>{
        const url =`http://localhost:9193/api/empleado`;
        const Listuser = await axios.get(url);
        updateUser(Listuser.data);
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
      },[]);
      
    const eliminarEmpleado = async (e)=>{
      axios.delete(`http://localhost:9193/api/empleado/${e.idempleado}`).then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    return ( 
        
        <div className="container getuser mb-5">
        <div className="row">
            <fieldset>
              <Contenedor>Lista de Empleados</Contenedor>
              
                   <table className="table">
                   <thead>  
                     {user.map((e)=>{
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
              })}
                       
                   </thead>
                 </table>
            </fieldset>
        </div>
      </div>
        );
}
 
export default ConsultarUser;