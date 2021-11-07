import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer text-light">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="footer col-xs-12 col-sm-4 col-md-4">
            <h5>Mapa del sitio</h5>
            <ul className="list-unstyled quick-links">
              <li>
                {" "}
                <Link to={"/"} className="nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/menu"} className="nav-link">
                  Menú
                </Link>
              </li>
              <li>
                <Link to={"/servicios"} className="nav-link">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to={"/contactenos"} className="nav-link">
                  Contactanos
                </Link>
              </li>
              <li>
                <Link to={"/nosotros"} className="nav-link">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
            <a className="navbar-brand" href="index.html">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2FLogoBlanco.png?alt=media&token=fea36fc8-fe84-41b5-9a00-5634ceb12b2e"
                alt="producto"
                height="200"
                widht="150"
              />
            </a>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.fiverr.com/share/qb8D02"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
              <p>
                Helados y postres Zona Dulce Ltda. Direccion: Cl. 10 ##37, Cali.
                Reservas: reservas@zonadulce.com. Tel: 3125672354
              </p>
              <p className="h6">
                ©Copyright 2021.
                <a
                  className="text-green ml-2"
                  href="https://talento.juventic.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Juventic
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
