import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SelectButton.css'

function OpcionesFonasa({ textButton = 'Cobertura FONASA' }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (path) => {
        setIsOpen(false);
        navigate(path);
    };
    return (
        <div className="select-button-container">
            <button onClick={toggleMenu} className="select-button">
                {textButton}
            </button>
            {isOpen && (
                <ul className="dropdown-menu-fonasa">
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-a')}>Tramo A</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-b')}>Tramo B</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-c')}>Tramo C</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-d')}>Tramo D</li>
                </ul>
            )}
        </div>
    )
}

export default OpcionesFonasa