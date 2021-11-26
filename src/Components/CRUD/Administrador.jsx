import React, {useState,Fragment} from 'react';
import UpdateUser from './User/updateUser';
import InsertUser from './User/insertarUser';
import GetUser from './User/getUser';

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
                 estado === "Actualizar"?<UpdateUser/>:
                 estado === "Insertar"?<InsertUser/>:
                 estado === "Consultar"?<GetUser/>:null
                }
                 </div>
        </Fragment>
    
    
    );
}
 
export default Admin;