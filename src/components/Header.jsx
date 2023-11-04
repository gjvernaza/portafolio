
import Nav from "./Nav.jsx";
import Button from "./Button.jsx";
import "./Header.css";
import { useState } from 'react'




export default function Header() {

    const [isOpen, setisOpen] = useState(false);
    //let ancho = window.innerWidth;
    //let alto = window.innerHeight;
    let count = 0;

    function handleClick(value) {
        setisOpen(!value)
        console.log(isOpen)
    }

    let clase = "nav-container";

    if (isOpen) {
        clase = "nav-container-movil";

    } else {
        clase = "nav-container";

    }


    return (

        <header>
            <nav>
                <div className="nav">
                    <h5 className="font-bold text-4xl">PORTAFOLIO</h5>

                    <Nav cls="nav-container" />
                    <Button isOpen={isOpen} onClick={() => handleClick(isOpen)} ></Button>


                </div>
                {
                    isOpen ? <Nav cls={clase} /> : null
                }

            </nav>
        </header>
    );
}


