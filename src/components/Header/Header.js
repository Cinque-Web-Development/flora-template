import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <Menu right >
                <a to="/">Home</a>
                <a to="/">About</a>
                <a to="/">Products</a>
                <a to="/">Contact Us</a>
            </Menu>
            <h1>Header</h1>
        </div>
    )
}
