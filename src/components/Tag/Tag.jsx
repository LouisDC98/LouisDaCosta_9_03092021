import React from 'react';
import styled from 'styled-components';
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
        <TagShape>
            <TagImg className={colorTag}>
                <TagIcon src={imgData}></TagIcon>
            </TagImg>
            <div>
                <TagNumber>{valueData}</TagNumber>
                <TagText>{textData}</TagText>
            </div>
        </TagShape>
    );
}

const TagShape = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    width: 194px;
    background-color: #fbfbfb;
    border-radius: 5px;
    padding: 32px;
    margin: 20px 0;
`;

const TagImg = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 5px;
    margin-right: 30px;
`;

const TagIcon = styled.img`
    padding: 19px 20px 17px 20px;
`;

const TagNumber = styled.div`
    color: #282d30;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-align: start;
`;

const TagText = styled.div`
    color: #74798c;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: start;
`;

export default Tag;
