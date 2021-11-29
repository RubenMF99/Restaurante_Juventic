import React, {useState,Fragment} from 'react';
import UpdateEmpleado from './Empleado/updateEmpleado';
import InsertEmpleado from './Empleado/insertarEmpleado';
import GetEmpleado from './Empleado/getEmpleado';
import GetPlatos from './platos/getplatos';
import InsertarPlatos from'./platos/Insertarplatos';
import ActualizarPlatos from './platos/ActualizarPlatos';
import GetServicio from './servicios/getservicio';
import InsertarServicio from'./servicios/Insertarservicio';
import Getreserva from './reservas/Getreservas';
import { Link } from "react-router-dom";
const Admin = () => {
    const [estado,updateEstado] = useState("");
    const [accion,updateAccion] = useState("");
    console.log(estado);
    return ( 
        <Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-8 ">
            <label className= "mt-5 blockquote"> Seleccionar Accion</label>
            <Link to={"#"} onClick={() => updateAccion("empleado")}  className="nav-link mb-2">
            Gestionar Empleado
              </Link>
              <Link to={"#"} onClick={() => updateAccion("platos")}  className="nav-link mb-2">
            Gestionar Platos
              </Link>
              <Link to={"#"} onClick={() => updateAccion("servicio")}  className="nav-link mb-2">
            Gestionar Servicios
              </Link>
              <Link to={"#"} onClick={() => updateAccion("reserva")}  className="nav-link mb-5">
            Lista de Reservas
              </Link>
            {accion==="empleado"?
                <div className="form-group ">
                        <button className="btn btn-secondary ml" onClick={()=>updateEstado("Insertar")}>Insertar empleado</button>
                        <button className="btn btn-success ml" onClick={()=>updateEstado("Actualizar")}>Actualizar empleado</button>
                        <button className="btn btn-primary ml" onClick={()=>updateEstado("Consultar")}>Consultar empleado</button>
                </div> 
                :accion==="platos"?
                <div className="form-group ">
                        <button className="btn btn-secondary ml" onClick={()=>updateEstado("Insertarpla")}>Insertar Platos</button>
                        <button className="btn btn-success ml" onClick={()=>updateEstado("Actualizarpla")}>Actualizar Platos</button>
                        <button className="btn btn-primary ml" onClick={()=>updateEstado("Consultarpla")}>Consultar Platos</button>
                </div> 
                :accion==="servicio"?
                <div className="form-group ">
                        <button className="btn btn-secondary ml" onClick={()=>updateEstado("Insertarser")}>Insertar Servicio</button>
                        <button className="btn btn-primary ml" onClick={()=>updateEstado("Consultarser")}>Consultar Servicio</button>
                </div>
                :accion==="reserva"?
                <button className="btn btn-primary ml" onClick={()=>updateEstado("Consultares")}>Consultar Reservas</button>
                :null
                }
            </div>
                </div>
                {
                 estado === "Actualizar"?<UpdateEmpleado/>:
                 estado === "Insertar"?<InsertEmpleado/>:
                 estado === "Consultar"?<GetEmpleado/>:
                 estado === "Consultarpla"?<GetPlatos/>:
                 estado === "Insertarpla"?<InsertarPlatos/>:
                 estado === "Actualizarpla"?<ActualizarPlatos/>:
                 estado === "Consultarser"?<GetServicio/>:
                 estado === "Insertarser"?<InsertarServicio/>:
                 estado === "Consultares"?   <Getreserva/>:
                 null
                }
                 </div>
        </Fragment>
    
    
    );
}
 
export default Admin;