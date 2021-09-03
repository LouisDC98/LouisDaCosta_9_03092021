import React from 'react';
import './Tag.css';
import energy from '../../img/energy.svg';
import protein from '../../img/protein.svg';
import lipid from '../../img/lipid.svg';
import glucide from '../../img/glucide.svg';

function Tag(props) {
    const { userData, data } = props;

    let imgData;
    let valueData;
    let textData;
    let colorTag;

    switch (data) {
        case 'calorieCount':
            imgData = energy;
            valueData = userData.calorieCount + 'kCal';
            textData = 'Calories';
            colorTag = 'colorTag--calorie';
            break;
        case 'proteinCount':
            imgData = protein;
            valueData = userData.proteinCount + 'g';
            textData = 'Proteines';
            colorTag = 'colorTag--protein';
            break;
        case 'carbohydrateCount':
            imgData = glucide;
            valueData = userData.carbohydrateCount + 'g';
            textData = 'Glucides';
            colorTag = 'colorTag--glucide';
            break;
        case 'lipidCount':
            imgData = lipid;
            valueData = userData.lipidCount + 'g';
            textData = 'Lipides';
            colorTag = 'colorTag--lipid';
            break;
    }

    return (
        <React.Fragment>
            <div className="shapeTag">
                <div className={`imgTag ${colorTag}`}>
                    <img src={imgData} className="iconTag"></img>
                </div>
                <div>
                    <div className="numberTag">{valueData}</div>
                    <div className="textTag">{textData}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Tag;
