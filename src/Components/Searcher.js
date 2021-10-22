import React from 'react';
import './Styles/Searcher.css'
function Searcher() {
    return (  
        <input 
            className="Searher" 
            type="text" 
            placeholder="Buscar por nombre 🔎"
        >
        </input>
    );
}

export { Searcher };