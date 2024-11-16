import React from 'react'
import NavbarLogin from '../ui/NavbarLogin'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import Footer from '../ui/Footer'

const Login = () => {
  return (
    <>
        <NavbarLogin/>
        <div className='login-container'>
            <div className='login-information'>
                <h1>Iniciar sesión</h1>
                <p>¿No tienes una cuenta? <a href='/registrarse'>Regístrate aquí</a> </p>
            </div>
            <div className='login-form'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label><br />
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña:</label><br />
                        <input type='password' id='password' name='password' required />
                    </div>
                    <p>¿Olvidaste tu contraseña? <a href=''>Recuperala aquí  </a></p>
                    <div className='form-submit'>
                        <button type='submit'>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login
