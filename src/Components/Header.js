import React from 'react';
import './Styles/Header.css'
import HeaderIMG from '../images/RyM.svg'
function Header() {
    return (  
        <div className="Header">
            <img 
                className="Header-img" 
                src={HeaderIMG}
                alt="Header img"
            />
        </div>
    );
}

export {Header};