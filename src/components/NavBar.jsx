import logo from  '../assets/img/logo.png'
import CartWidget from './CartWidget';
import '../styles/NavBar.css'
function NavBar() {

    return (
        <div className='header'>
        <nav>
            <img src={logo} alt="Logotienda" />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Contacto</a></li>
                
                <li><CartWidget/></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;