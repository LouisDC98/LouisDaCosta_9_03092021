import React from 'react';
import './SideNav.css';
import yoga from '../../img/yoga.svg';
import swim from '../../img/swim.svg';
import bike from '../../img/bike.svg';
import bodybuilding from '../../img/bodybuilding.svg';

function SideNav() {
    return (
        <React.Fragment>
            <div className="bgSideNav">
                <nav className="navSideNav">
                    <div className="linkSideNav">
                        <img src={yoga} className="imgSideNav"></img>
                    </div>
                    <div className="linkSideNav">
                        <img src={swim} className="imgSideNav"></img>
                    </div>
                    <div className="linkSideNav">
                        <img src={bike} className="imgSideNav"></img>
                    </div>
                    <div className="linkSideNav">
                        <img src={bodybuilding} className="imgSideNav"></img>
                    </div>
                </nav>
                <p className="textSideNav">Copyright, SprotSee 2020</p>
            </div>
        </React.Fragment>
    );
}

export default SideNav;
