import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <Menu 
                right
                width={ '100vw' }
            >
                <Link href="/">Home</Link>
                <Link href="/">Products</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact Us</Link>
                <a href="/houseplants">House Plants</a>
                <a href="/flowers"> Flowers</a>
                <a href="/succulents"> Succulents</a>
            </Menu>
            <h1>Header</h1>
        </div>
    )
}
