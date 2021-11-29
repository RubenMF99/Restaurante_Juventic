import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label
} from "reactstrap";
const Header = () => {
  const [error, UpdateError] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [Sesion, UpdateSesion] = useState({
    Usuario: "",
    Password: "",
  });
  const { Usuario, Password } = Sesion;
  const handleChangeLogin = (e) => {
    UpdateSesion({
      ...Sesion,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // Validar que no haya campos vacios
    if (Usuario.trim() === "" || Password.trim() === "") {
      UpdateError(true);
      return;
    }
    UpdateError(false);
    UpdateSesion({
        Usuario: "",
        Password: "",});
  };

  return (
    <nav className=" j navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="logotipo"
            src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Flogocircle.png?alt=media&token=9910b245-3c41-4207-b7b9-2d11081add66"
            alt=""
            width="100"
            height="105"
          />
        </a>
        <div className="todo">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="ColorLink collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link to={"/"} className="nav-link">
                Inicio
              </Link>
              <Link to={"/nosotros"} className="nav-link">
                Nosotros
              </Link>
              <Link to={"/menu"} className="nav-link">
                Menú
              </Link>
              <Link to={"/servicios"} className="nav-link">
                Servicios
              </Link>
              <Link to={"/contactenos"} className="nav-link">
                Contactanos
              </Link>
              <Button onClick={() => setisOpen(true)} className="btn btn-danger mr">
                Ingresar
              </Button>
              <Modal isOpen={isOpen}>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
              <FormGroup>
              <Label>Usuario</Label>
                <input
                      type="text"
                      className="form-control"
                      name="Usuario"
                      placeholder="Tu Usuario"
                      value={Usuario}
                      onChange={handleChangeLogin}
                    />
                    <Label className="mt-3">Contraseña</Label>
                <input
                      type="password"
                      className="form-control"
                      name="Password"
                      placeholder="Contraseña"
                      value={Password}
                      onChange={handleChangeLogin}
                    />
              </FormGroup>
              <FormGroup>
              <Link to={"/register"} onClick={() => setisOpen(false)}  className="nav-link">
                No tienes Cuenta? Registrate
              </Link>
              </FormGroup>
              </ModalBody> 
              <ModalFooter>
              <Button className="btn btn-primary" onClick={() => setisOpen(false)}>
                Cerrar
              </Button>
              <Link to={"/admin"} onClick={handleSubmit} className="btn btn-danger " onClick={() => setisOpen(false)}>
                Iniciar Sesion
              </Link>
                </ModalFooter> 
              </Modal>
                      </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Header;
