
import Nav from "./Nav.jsx";
import Button from "./Button.jsx";
import "./Header.css";
import { useState } from 'react'



export default function Header() {

    const [isOpen, setisOpen] = useState(false)

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
                    <h1>PORTAFOLIO</h1>
                    
                        <Nav cls="nav-container"/>
                    

                    <div className="nav-menu-icon">
                        <a onClick={() => handleClick(isOpen)}>

                            <Button value={isOpen}></Button>
                        </a>
                    </div>
                </div>
                {
                    isOpen ? <Nav cls={clase} /> : null
                }

            </nav>
        </header>
    );
}


