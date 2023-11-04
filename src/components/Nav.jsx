
import "./Nav.css";
import "@material/web/checkbox/checkbox.js";
import "@material/web/switch/switch.js";


export default function Nav({ cls }) {
    const clsH3 = "font-bold text-xl";
    return (

        <>
            <div className={cls}>
                <a className="nav-container-element" href="#home">
                    <h3 className={clsH3} >Inicio</h3>
                </a>
                <a className="nav-container-element" href="#about">
                    <h3 className={clsH3} >About</h3>
                </a>
                <a className="nav-container-element" href="#contact">
                    <h3 className={clsH3} >Contacto</h3>
                </a>
                <a className="nav-container-element" href="#portfolio">
                    <h3 className={clsH3} >Portafolio</h3>
                </a>

            </div>



        </>
    );



}
