import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginRegister() {
    const navigate = useNavigate();

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        // Aquí se debe agregar la lógica de registro
        navigate('/feed');
    };

    return (
        <form className="LoginRegister" onSubmit={handleSubmitRegister}>
            <div>
                <select 
                    name="documentTipo" 
                    id="documentTipo"
                    className="login-form-documentTipo"
                >
                    <option value="V">V</option>
                    <option value="E">E</option>
                    <option value="P">P</option>
                </select>
                <input type="text" name="redDocument" id="regDocument" className="login-form-documentNumber" placeholder="Ingrese su documento" maxLength={10}/>
            </div>
            <div>
                <input type="email" name="regEmail" id="regEmail" placeholder="Ingrese su correo electronico" className="login-form-input" maxLength={64} />
            </div>
            <div>
                <input type="password" name="regPassWord" id="regPassWord" placeholder="Ingrese Su contraseña" className="login-form-input" maxLength={32}/>
            </div>
            <div>
                <input type="password" name="regRepPassWord" id="regRepPassWord" placeholder="Repita su contraseña" className="login-form-input" maxLength={32}/>
            </div>
            {/*Aqui va la validacion del pass */}
            <div></div>
            <div>
                <input type="checkbox" name="acceptTerms" id="acceptTerms" /> Acepto los &nbsp;<a href="#"> Terminos y condiciones</a>
            </div>

            <div>
                <button className='login-form-submit' type="submit">Crear Cuenta</button>
            </div>

        </form>

    )
}

export default LoginRegister;