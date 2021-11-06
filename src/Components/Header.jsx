import React from 'react'
import {Link} from 'react-router-dom'
import Datos from '../utils/datos.json'

const Header = () => {
    return ( 
        <nav className=" j navbar navbar-expand-lg">
              
              <div className="container">
                <a className="navbar-brand" href="/">
                <img classclassName="logotipo" src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Flogocircle.png?alt=media&token=9910b245-3c41-4207-b7b9-2d11081add66" alt="" width="100" height="105"/> 
                </a>
                <div className="todo">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                        <div class="navbar-nav " >
                        <Link to={'/'} className="nav-link">Inicio</Link>
                        <Link to={'/nosotros'} className="nav-link">Nosotros</Link>
                        <Link to={'/menu'} className="nav-link">Menú</Link>
                        <Link to={'/servicios'} className="nav-link">Servicios</Link>
                        <Link to={'/contactenos'} className="nav-link">Contactanos</Link>
                        </div>
                    </div>
                </div>
          
              </div>
              
            </nav>
     );
}
 
export default Header;