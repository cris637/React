import logo from  '../assets/img/logo.png'
import CartWidget from './CartWidget';
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';


function NavBar() {
    const {contextFunction} = useCartContext();
    contextFunction();
    return (
        <div className='header'>
        <nav>
            <img src={logo} alt="Logotienda" />
            <ul>
                <li><Link to="">Inicio</Link></li>
                <li><Link to="/talles/s">Talle S</Link></li>
                <li><Link to="/talles/m">Talle M</Link></li>
                <li><Link to="/talles/l">Talle L</Link></li>
                
                <li><CartWidget/></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;