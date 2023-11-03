
import "./Nav.css";


export default function Nav({cls}) {

    return (
        <div className={cls}>
            <a className="nav-container-element" href="#home">
                <h3>Inicio</h3>
            </a>
            <a className="nav-container-element" href="#about">
                <h3>About</h3>
            </a>
            <a className="nav-container-element" href="#contact">
                <h3>Contacto</h3>
            </a>
            <a className="nav-container-element" href="#portfolio">
                <h3>Portafolio</h3>
            </a>
        </div>
    );


}
