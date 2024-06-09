import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SelectButton.css'

function OpcionesFonasa() {
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
                Cobertura Fonasa
            </button>
            {isOpen && (
                <ul className="dropdown-menu-fonasa">
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-a')}>Letra A</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-b')}>Letra B</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-c')}>Letra C</li>
                    <li onClick={() => handleOptionClick('/beneficios/fonasa-d')}>Letra D</li>
                </ul>
            )}
        </div>
    )
}

export default OpcionesFonasa