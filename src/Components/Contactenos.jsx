import React from 'react';

const Contactenos = () => {
    return ( 

        <div class="container" id="contenido">
            <div class="form" id="formulario">
                <h1>CONTÁCTANOS</h1>
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Asunto</label>
                    <input type="text" class="form-control" id="validationCustom01" value="" required/>
                    <div class="valid-feedback">
                        Luce bien!
                    </div>
                    </div>
                    <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="validationCustom02" value="" required/>
                    <div class="valid-feedback">
                        Luce bien!
                    </div>
                    </div>
                    <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Email</label>
                    <div class="input-group has-validation">

                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        <div class="invalid-feedback">
                        Ingresa un correo valido.
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Servicio</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Selecciona...</option>
                        <option>...</option>
                        <option>Celebracion de cumpleaños</option>
                        <option>Aniversario</option>
                        <option>Fiesta infantil</option>
                        <option>Declaracion o propuesta</option>
                        <option>Despedida</option>
                        <option>Cena con amigos</option>
                    </select>
                    <div class="invalid-feedback">
                        Selecciona un servicio.
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Comentario</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Ingresa tu comentario aqui" required></textarea>
                        <div class="invalid-feedback">
                            Por favor ingresa un comentario.
                        </div>
                    </div>
                    <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                        Acepto los terminos y condiciones
                        </label>
                        <div class="invalid-feedback">
                        Debes aceptar los terminos y condiciones.
                        </div>
                    </div>
                    </div>
                    <div class="col-mb-12">
                    <button className="btn btn-primary mt-4 mb-5" id="enviar" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Contactenos;