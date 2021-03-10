import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "./Header.css";

export default function Header() {
    const [ menuOpen, setMenuOpen ] = useState();

    const isMenuOpen = function(state) {
        return state.isOpen;
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
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about">About</Link>  
                <div class="ui compact menu">
                    <div class="ui simple dropdown item bm-item">
                        Products
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <Link to="/flowers" class="item bm-item">Flowers</Link>
                            <Link to="/plants" class="item bm-item">House Plants</Link>
                            <Link to="/succulents" class="item bm-item">Succulents</Link>
                        </div>
                    </div>
                </div>        
                <Link to="/contact">Contact Us</Link>
            </Menu>
            <h1>Header</h1>   
        </div>
    )
}
