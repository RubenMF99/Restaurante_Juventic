import React from "react";

const Roles = ({ roles }) => {
  return (
    <div className="col-md-4 p-4 row">
      <div className="m-3">
        <img src={roles.url} className=" rounded-circle imag" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{roles.nombre}</h5>
          <p className="card-text">{roles.rol}</p>
        </div>
      </div>
    </div>
  );
};

export default Roles;
