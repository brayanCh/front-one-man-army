import logoSrc from "../../media/logonav.png";
import { Link } from "react-router-dom";


const NavMenu = () => {

    return (
        <div className="flexcenter nav-menu">
            <Link to="/">Inicio </Link> 
            <Link to="/usuario/crear">Crear usuario </Link> 
            <Link to="/usuario/listar">listar usuarios </Link> 
        </div>
    )
}

const Navbar = () => {

    return (
        <nav className="navbar">
            <img alt="log" src={logoSrc} />
            <NavMenu />
        </nav>
    );
};

export default Navbar;

