import React, { useState } from "react";
import "../styles/loginadm.css";

const LoginAdm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/superusuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // Manejar la respuesta del backend, por ejemplo, guardar el token en localStorage
      localStorage.setItem("token", data.token);
      // Redirigir al usuario a la página de administración
      window.location.href = "/admin/home";
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  };

  return (
    <>
      <div className="admin-container">
        <div className="admin-container-login">
          <h1>Bienvenido a VirtualVent</h1>
          <div className="admin-container-login-form">
            <form onSubmit={handleSubmit}>
              <div className="admin-container-login-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="admin-container-login-form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="admin-container-login-form-submit">
                <button type="submit">Iniciar sesión</button>
              </div>
              <p className={`error ${error ? "show" : ""}`}>{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdm;