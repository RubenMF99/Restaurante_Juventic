import React, {useState,Fragment} from 'react';
import UpdateEmpleado from './Empleado/updateEmpleado';
import InsertEmpleado from './Empleado/insertarEmpleado';
import GetEmpleado from './Empleado/getEmpleado';

const Admin = () => {
    const [estado,updateEstado] = useState("");
    console.log(estado);
    return ( 
        <Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-8 ">
            <label className= "mt-5 blockquote">Seleccione Accion</label>
                <div className="form-group ">
                        <button className="btn btn-secondary ml" onClick={()=>updateEstado("Insertar")}>Insertar</button>
                        <button className="btn btn-success ml" onClick={()=>updateEstado("Actualizar")}>Actualizar</button>
                        <button className="btn btn-primary ml" onClick={()=>updateEstado("Consultar")}>Consultar</button>
                </div>
            </div>
                </div>
                {
                 estado === "Actualizar"?<UpdateEmpleado/>:
                 estado === "Insertar"?<InsertEmpleado/>:
                 estado === "Consultar"?<GetEmpleado/>:null
                }
                 </div>
        </Fragment>
    
    
    );
}
 
export default Admin;