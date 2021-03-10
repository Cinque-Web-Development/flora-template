import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "./Header.css";

export default function Header() {
    const [ menuOpen, setMenuOpen ] = useState();

    const isMenuOpen = function(state) {
        setMenuOpen(state.isOpen);
    }

    return (
        <div className="header">
            <Menu 
                right
                width={ '100vw' }
                heigth={ '100vh' }
                isOpen={menuOpen}
                onStateChange={ isMenuOpen }
            >
                <Link to="/" onClick={() => setMenuOpen(false)} >Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} >About</Link>  
                <div className="ui compact menu">
                    <div className="ui simple dropdown item bm-item">
                        Products
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link to="/flowers" className="item bm-item" onClick={() => setMenuOpen(false)} >Flowers</Link>
                            <Link to="/houseplants" className="item bm-item" onClick={() => setMenuOpen(false)} >House Plants</Link>
                            <Link to="/succulents" className="item bm-item" onClick={() => setMenuOpen(false)} >Succulents</Link>
                        </div>
                    </div>
                </div>        
                <Link to="/contact" onClick={() => setMenuOpen(false)} >Contact Us</Link>
            </Menu>
            <h1>Header</h1>   
        </div>
    )
}
