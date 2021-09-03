import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';

function Header() {
    return (
        <header className="bgHeader">
            <img src={logo} className="imgHeader"></img>
            <nav className="navHeader">
                <div className="linkHeader">Accueil </div>
                <div className="linkHeader">Profil</div>
                <div className="linkHeader">Réglage</div>
                <div className="linkHeader">Communauté</div>
            </nav>
        </header>
    );
}

export default Header;
