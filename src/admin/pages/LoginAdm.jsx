import React from "react";
import "../styles/loginadm.css";

const LoginAdm = () => {
  return(
    <>
        <div className="admin-container">
            <div className="admin-container-login">
                <h1>Bienvenido a VirtualVent</h1>
                <div className="admin-container-login-form">
                    <form>
                        <div className="admin-container-login-form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="admin-container-login-form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="admin-container-login-form-submit">
                            <button type="submit">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )};

export default LoginAdm;