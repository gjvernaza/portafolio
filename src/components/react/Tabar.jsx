import '../react/tabar.css'
import { useState } from 'react'

export default function Tabar() {
    const [tab, setTab] = useState(0)

    function handleClick(index) {
        setTab(index)
    }

    return (
        <>
            <div className="about-tab">
                <ul>
                    <li className={tab == 0 ? "about-tab-li-hover" : "about-tab-li"} onClick={() => { handleClick(0) }}>Skills</li>
                    <li className={tab == 1 ? "about-tab-li-hover" : "about-tab-li"} onClick={() => { handleClick(1) }}>Educación</li>
                    <li className={tab == 2 ? "about-tab-li-hover" : "about-tab-li"} onClick={() => { handleClick(2) }}>Certificados</li>
                </ul>

            </div>
            <div className={tab == 0 ? "active" : "content"}>

                <ul>
                    <li>Visión artificial con Python</li>
                    <li>Programación PLC</li>
                    <li>Diseño mecánico en softwares CAD (SolidWorks, Inventor, Fusion360)</li>
                    <li>Programación en Matlab</li>
                    <li>Arduino y ESP32</li>
                    <li>Desarrollo Móvil con Flutter y aplicaciones para IoT</li>
                    <li>HTML, CSS, JAVASCRIPT</li>

                </ul>
            </div>
            <div className={tab == 1 ? "active" : "content"}>
                <ul>
                    <li>
                        Universidad de las Fuerzas Armadas ESPE sede Latacunga
                    </li>
                </ul>
            </div>
            <div className={tab == 2 ? "active" : "content"}>
                <ul className='about-tab-link'>
                    <li>
                        <a href='https://uespe-my.sharepoint.com/:b:/g/personal/gjvernaza_espe_edu_ec/EV5JzLlaLc5GrRg2IReDJRUBbUIHeUhW1rLCfVIeep5YfQ?e=pTdw8B' target="_blank">Seguridad industrial Riesgos laborales 3.0</a>
                    </li>
                    <li>
                        <a href='https://www.udemy.com/certificate/UC-d5d88735-8aaa-4d31-98c5-4954fa046258/' target="_blank">Aprende MATLAB de CERO a EXPERTO</a>
                    </li>
                    <li>
                        <a href='https://www.udemy.com/certificate/UC-485e2b9a-342c-4e94-b54f-4ba29731aa77/' target="_blank">Python 3 Plus: Python desde Cero + Data Analysis y Matplot</a>
                    </li>
                    <li>
                        <a href='https://www.udemy.com/certificate/UC-2f6fd77d-db6d-4fda-977c-43af158f08a4/' target="_blank">Python Programming from A-Z: Beginner to Expert Course</a>
                    </li>
                    <li>
                        <a href='https://www.udemy.com/certificate/UC-af767431-72d4-4ab8-ba88-e7895465795a/' target="_blank">SQLite Databases | Python Programming: (Build App and API )</a>
                    </li>

                </ul>
            </div>

        </>

    );


}