import React from 'react';
import styled from 'styled-components';
import yoga from 'img/yoga.svg';
import swim from 'img/swim.svg';
import bike from 'img/bike.svg';
import bodybuilding from 'img/bodybuilding.svg';

/**
 * @component
 * @returns SideBar with NavLink
 */
function SideNav() {
    /* arrayImg is an array with alias of pictures */
    const arrayImg = [yoga, swim, bike, bodybuilding];

    /* Return a nav bar with logos for each element on arrayImg a new link is created  */
    return (
        <SideNavBackground>
            <SideNavNav>
                {arrayImg.map((data) => (
                    <SideNavLink key={data}>
                        <SideNavImg src={data}></SideNavImg>
                    </SideNavLink>
                ))}
            </SideNavNav>
            <SideNavText>Copyright, SportSee 2020</SideNavText>
        </SideNavBackground>
    );
}

const SideNavBackground = styled.div`
    background-color: black;
    width: 117px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SideNavNav = styled.nav`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SideNavLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    width: 64px;
    height: 64px;
    border-radius: 6px;
    margin: 20px 0;
    cursor: pointer;
`;

const SideNavImg = styled.img`
    width: 32px;
    height: 36px;
`;

const SideNavText = styled.p`
    color: white;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(-180deg);
    margin: 15px 0;
`;

export default SideNav;
