

function LoginForget(){

    const handleSubmitForget = (e) => {
        e.preventDefault();
    }

    return (
        <form className="LoginForget" onSubmit={handleSubmitForget}>
            <div>
                <input type="email" name="reqEmail" id="reqEmail" placeholder="Ingrese su correo electronico" className="login-form-input" maxLength={64} />
            </div>

            <div>
                <button className='login-form-submit' type="submit">Enviar Email de recuperacion</button>
            </div>
        </form>
    )
}

export default LoginForget