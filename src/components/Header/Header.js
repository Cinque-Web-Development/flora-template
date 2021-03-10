import React, { useState } from "react";
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
                <a href="/" onClick={() => setMenuOpen(false)} >Home</a>
                <a href="/about" onClick={() => setMenuOpen(false)} >About</a>  
                <div className="ui compact menu">
                    <div className="ui simple dropdown item bm-item">
                        Products
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <a href="/flowers" className="item bm-item" onClick={() => setMenuOpen(false)} >Flowers</a>
                            <a href="/houseplants" className="item bm-item" onClick={() => setMenuOpen(false)} >House Plants</a>
                            <a href="/succulents" className="item bm-item" onClick={() => setMenuOpen(false)} >Succulents</a>
                        </div>
                    </div>
                </div>        
                <a href="/contact" onClick={() => setMenuOpen(false)} >Contact Us</a>
            </Menu>
            <h1>Header</h1>   
        </div>
    )
}
