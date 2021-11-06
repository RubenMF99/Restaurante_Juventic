import React from 'react';
import DateService from '../utils/datos.json'
import CardService from './CardService';

const Servicios = () => {
    return ( 
        <div className="container">

        <div className="row justify-content-center">
             <h2 className="mt-5 mb-5 m-lg-5 col-md-9 display-3">Servicios</h2>
                <div className="col-md-12 mb-5">
                    <p className="text-justify-content-center blockquote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate sed repudiandae dolorem corporis numquam dolor labore dignissimos, 
                    officia exercitationem perferendis alias modi natus voluptatum doloremque voluptas autem in. Itaque!</p>
                </div>
                    <div className="col-10 p-5 row">
                    { DateService.ServiciosRes.map((e)=>(
                        <CardService
                              datosRes={e} key={e.id}   />   
                        ))}
                    
                </div>       
        </div>
        </div>
     );
     
}
 
export default Servicios;