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

      <section id="comentarios">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2FSlider-Testimonios1.jpg?alt=media&token=68304f61-ca96-4f7b-8367-609e1e412a29"
                className="d-block w-100"
                alt="First Slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="col-md-2 ml-5 mt-1 mb-5">
                  <div className="mx-auto d-block">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2Fpersonal1%402x.png?alt=media&token=e858db3c-a779-4bc5-9b4d-5e0892512efb"
                      className="card-img-top rounded-circle"
                      width="100%"
                      height="130px"
                      alt=""
                    />
                  </div>
                </div>

                <div className="container-item">
                  <div className="estiloTestimonios">
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque ducimus quas temporibus ad id eius soluta
                          suscipit nemo, laborum ut natus a eum mollitia maiores
                          excepturi explicabo, quis praesentium, eaque iure
                          error provident tempora. Itaque dolor quam pariatur
                          natus optio.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">Angela</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2FSlider-Testimonios1.jpg?alt=media&token=68304f61-ca96-4f7b-8367-609e1e412a29"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Nosotros%2Fpersonal1%402x.png?alt=media&token=e858db3c-a779-4bc5-9b4d-5e0892512efb"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
