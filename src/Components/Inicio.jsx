import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Inicio = () => {
  return (
    <div className="todo">
      <section className="fondolog">
        <div>
          <img
            className="log logo1"
            src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Flogo.png?alt=media&token=95fe0f42-ec7d-464a-ad41-8cabcdd30303"
            width="400"
            height="400"
            alt="Zona Dulce"
          />
        </div>
      </section>

      <section className="section2 container">
        <div className="item" id="item1">
          <h2>Nuestra Propuesta </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="intem" id="item2">
          <div className="card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Menu%2Fmenu%402x.png?alt=media&token=4eb67152-c233-40be-8288-30f67c21b895"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <a href="menu" className="btn btn-primary">
                Menú completo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2FHELADOS%20Y%20POSTRES.png?alt=media&token=536924e8-a587-4c16-8520-2acb5ea72132"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Menu%2Fmenu2.jpg?alt=media&token=c848d47d-4be4-49ec-ba90-7ed109a3a2e2"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Menu%2Fmenu4.jpg?alt=media&token=09ab69f5-6116-44fe-a754-7b69040659af"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="FondoFest row Descrip text-white widht=100">
        <div className="col-sm-4 center-align">
          <div className="single-box">
            <div className="img-area">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Ficono2%402x.png?alt=media&token=2f437fa7-73b8-4c39-990a-04ce05d07e74"
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="img-text text-xxl-center">
              <h2>Fiestas Temáticas</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                fugit deserunt nesciunt consectetur cupiditate minima veritatis
                reiciendis libero architecto minus!
              </p>
              <a href="contactenos" className="btn btn-primary">
                Reserva aquí
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 center-align">
          <div className="single-box">
            <div className="img-area">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Ficono3%402x.png?alt=media&token=8af62d11-6689-4acd-9cda-c23b714bc299"
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="img-text container text-xxl-center">
              <h2>Cenas Empresariales</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                fugit deserunt nesciunt consectetur cupiditate minima veritatis
                reiciendis libero architecto minus!
              </p>
              <a href="contactenos" className="btn btn-primary">
                Reserva aquí
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 center-align">
          <div className="single-box">
            <div className="img-area">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Ficono4%402x.png?alt=media&token=d4f62dd2-1957-41f8-b103-d6ccee1956e2"
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="img-text text-xxl-center">
              <h2>Cumpleaños</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                fugit deserunt nesciunt consectetur cupiditate minima veritatis
                reiciendis libero architecto minus!
              </p>
              <a href="contactenos" className="btn btn-primary">
                Reserva aquí
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="comentarios">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2F1.png?alt=media&token=e448d564-ce17-4e33-a569-bc3fd05c0508"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2F2.png?alt=media&token=3288e248-6605-48f6-8516-33fb86024085"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2F3.png?alt=media&token=141a1c32-a524-47f0-a24c-a914065d864f"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
};

export default Inicio;
