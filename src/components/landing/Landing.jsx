import './Landing.css'
import Login from './login/Login'
import usmBackground from './assets/usm-background.jpg'

function Landing(){

    /*BackGround*/
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${usmBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={backgroundStyle} className="Landing">
            <div className='logo-container'>
                <img src={`Logo-completo.png`} alt="Logo" className='landing-logo-completo'/>
            </div>
            <Login/>
        </div>
    )

};

export default Landing;