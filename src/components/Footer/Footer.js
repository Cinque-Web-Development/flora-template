import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
           <div className="cinque">
            <h3>&copy; 2021 by <a className="cinque-link" href="https://www.cinquewd.com" target="_blank" rel="noreferrer">Cinque Web Development</a></h3>   
            </div> 
            <div className="social-links">
                <a className="socials" href="https://www.linkedin.com/cinque-web-dev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                <a className="socials" href="https://www.github.com/cinquewebdev" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
                <a className="socials" href="https://www.twitter.com/cinquewebdev" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    )
}
