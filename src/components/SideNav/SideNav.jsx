import React from 'react';
import './SideNav.css';
import yoga from '../../img/yoga.svg';
import swim from '../../img/swim.svg';
import bike from '../../img/bike.svg';
import bodybuilding from '../../img/bodybuilding.svg';

function SideNav() {
    const arrayImg = [yoga, swim, bike, bodybuilding];
    return (
        <React.Fragment>
            <div className="bgSideNav">
                <nav className="navSideNav">
                    {arrayImg.map((data) => (
                        <div className="linkSideNav" key={data}>
                            <img src={data} className="imgSideNav"></img>
                        </div>
                    ))}
                </nav>
                <p className="textSideNav">Copyright, SportSee 2020</p>
            </div>
        </React.Fragment>
    );
}

export default SideNav;
