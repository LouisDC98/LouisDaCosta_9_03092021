import React from 'react';
import styled from 'styled-components';
import logo from 'img/logo.svg';

/**
 * @component
 * @returns Header with NavLink
 */
function Header() {
    return (
        <HeaderBackground>
            <HeaderImg src={logo}></HeaderImg>
            <HeaderNav>
                <HeaderLink>Accueil </HeaderLink>
                <HeaderLink>Profil</HeaderLink>
                <HeaderLink>Réglage</HeaderLink>
                <HeaderLink>Communauté</HeaderLink>
            </HeaderNav>
        </HeaderBackground>
    );
}

const HeaderBackground = styled.header`
    background-color: black;
    height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.5);
`;

const HeaderImg = styled.img`
    margin: 0 20px;
`;

const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
`;

const HeaderLink = styled.a`
    color: white;
    margin: 20px 0;
    padding: 10px;
    cursor: pointer;
`;

export default Header;
