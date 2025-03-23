import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // Aquí se debe agregar la lógica de autenticación
        navigate('/feed');
    };

    return (
        <form className='LoginForm login-form' onSubmit={handleSubmitLogin}>
            <div>
                <input 
                    type="email" 
                    id="email"
                    className='login-form-input' 
                    ref={emailRef}
                    placeholder='Introduzca su email'
                    maxLength={64}
                />
            </div>
            <div>
                <input 
                    type="password"
                    id='password'
                    className='login-form-input'
                    ref={passwordRef}
                    placeholder='Introduzca su contraseña'
                    maxLength={30}
                />
            </div>

            <div className='login-form-status'>
                {/*Para agregar... subcomponente de status login */}
                <p>Te estamos esperando...</p>
            </div>

            <div>
                <button className='login-form-submit' type="submit">Entrar</button>
            </div>
                
        </form>
    );
}

export default LoginForm;