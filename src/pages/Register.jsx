import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../ui/NavbarLogin";
import "../styles/register.css";
import Footer from "../ui/Footer";

const Register = () => {
  return (
    <>
      <NavbarLogin />
      <div className="register-container">
        <div className="register-info">
          <h1>Registrarse</h1>
        </div>
        <div className="register-form">
          <form>
            <div className="register-form-group">
              <label htmlFor="tipoDocumento">Tipo de documento</label>
              <br />
              <select id="tipoDocumento" name="tipoDocumento" required>
                <option value="">Seleccione</option>
                <option value="cedula">Cedula</option>
                <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
              </select>
            </div>
            <div className="register-form-group">
                <label htmlFor="numeroDocumento">Número documento</label><br />
                <input type="number" name="numeroDocumento" id="numeroDocumento" />
            </div>
            <div className="register-form-group">
                <label htmlFor="sexo">Sexo</label><br />
                <select name="sexo" id="sexo">
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                </select>
            </div>
            <div className="register-form-group">
                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label><br />
                <input type="date" name="fechaNacimiento" id="fechaNacimiento" />
            </div>
            <div className="register-form-group">
                <label htmlFor="primerNombre">Primer nombre</label><br />
                <input type="text" name="primerNombre" id="primerNombre" />
            </div>
            <div className="register-form-group">
                <label htmlFor="segundoNombre">Segundo nombre</label><br />
                <input type="text" name="segundoNombre" id="segundoNombre" />
            </div>
            <div className="register-form-group">
                <label htmlFor="primerApellido">Primer apellido</label><br />
                <input type="text" name="primerApellido" id="primerApellido" />
            </div>
            <div className="register-form-group">
                <label htmlFor="segundoApellido">Segundo apellido</label><br />
                <input type="text" name="segundoApellido" id="segundoApellido" />
            </div>
            <div className="register-form-group">
                <label htmlFor="departamento">Departamento</label><br />
                <select name="departamento" id="departamento">
                    <option value="cordoba">Córdoba</option>
                </select>
            </div>
            <div className="register-form-group">
                <label htmlFor="municipio">Municipio</label><br />
                <select name="municipio" id="municipio">
                    <option value="monteria">Montería</option>
                </select>
            </div>
            <div className="register-form-group">
                <label htmlFor="direccion">Dirección</label><br />
                <input type="text" name="direccion" id="direccion"/>
            </div>
            <div className="register-form-group">
                <label htmlFor="telefono">Número de teléfono</label><br />
                <input type="number" name="telefono" id="telefono" />
            </div>
            <div className="register-form-group">
              <label htmlFor="email">Correo electrónico</label>
              <br />
              <input type="email" id="email" name="email" required />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Contraseña</label>
              <br />
              <input type="password" id="password" name="password" required />
            </div>
            <div className="register-form-submit">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div className="register-login">
            <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
        </div>
      </div>
    </>
  );
};

export default Register;
