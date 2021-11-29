import React,{useState,useEffect} from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import {
  Button
} from "reactstrap";

const Getreserva = ()=>{
    const [reserva,updateReser] = useState([]);
    const [estadoeffect, updatestado] = useState(true);
    const ConsultarApi = async()=>{
        const url =`http://localhost:9193/api/reservas`;
        const Listreser = await axios.get(url);
        updateReser(Listreser.data);
        console.log(Listreser.data);
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
      
   
    return(  
        <div className="container getuser  mb-5">
        <div className="row">
              <Contenedor>Lista de Reservas</Contenedor>
              {reserva.length === 0 ? (
                    <p className="text-center blockquote">No hay elementos</p>
                  ) :(
                    reserva.map((e)=>(
                <div key={e.idreserva}>
                   <table className="table">
                    <thead>
                        <tr>
                            <th>
                                {"Id reserva"}
                            </th>
                            <th>
                                {"Nombre"}
                            </th>
                            <th>
                                {"Telefono"}
                            </th>
                            <th>
                                {"Email"}
                            </th>
                            <th>
                                {"Numero Personas"}
                            </th>
                            <th>
                                {"Servicio"}
                            </th>
                            <th>
                                {"Fecha"}
                            </th>
                            <th>
                                {"Hora"}
                            </th>
                            <th>
                                {"Indicaciones"}
                            </th>
                        </tr>
                    </thead>
                   <tbody>  
                         <tr>
                         <td >
                           {e.idreserva} 
                       </td>
                       <td >
                           {e.nombre}
                       </td>
                       <td >
                           {e.telefono}
                       </td>
                       <td >
                           {e.email}
                       </td>
                       <td >
                           {e.numper}
                       </td>
                       <td >
                           {e.nombreser}
                       </td>
                       <td >
                           {e.fecha}
                       </td>
                       <td >
                           {e.hora}
                       </td>
                       <td >
                           {e.indicaciones}
                       </td>
                       <td >
                                <img
                                  src={e.imagen}
                                  height="70px"
                                  width="70px"
                                  className="mr"
                                ></img>{" "}
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

export default Getreserva;