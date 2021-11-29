import React,{useState,useEffect} from "react";
import CardService from "./CardService";
import axios from "axios";
const Servicios = () => {

  const [service,updateService] =  useState([]);

  const consultarApi = async ()=>{
    const url = `http://localhost:9193/api/servicio`;
    const listService = await axios.get(url);
    updateService(listService.data);
    }

    useEffect(() => {
      consultarApi();
    }, [])
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2 className="mt-5 mb-5 m-lg-5 col-md-9 display-3">Servicios</h2>
        <div className="col-md-12 mb-5">
          <p className="text-justify-content-center blockquote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptate sed repudiandae dolorem corporis numquam dolor labore
            dignissimos, officia exercitationem perferendis alias modi natus
            voluptatum doloremque voluptas autem in. Itaque!
          </p>
        </div>
        <div className="col-10 p-5 row">
          {service.map((e) => (
            <CardService datosRes={e} key={e.idservicio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
