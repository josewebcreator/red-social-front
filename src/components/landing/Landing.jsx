import './Landing.css'
import Login from './login/Login'
import usmBackground from './assets/usm-background.jpg'

function Landing(){

    /*BackGround*/
    const backgroundStyle = {
        backgroundImage: `url(${usmBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={backgroundStyle} className="Landing">
            <Login/>
        </div>
    )

};

export default Landing;