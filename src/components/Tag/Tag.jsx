import React from 'react';
import styled from 'styled-components';
import energy from '../../img/energy.svg';
import protein from '../../img/protein.svg';
import lipid from '../../img/lipid.svg';
import glucide from '../../img/glucide.svg';

function Tag(props) {
    const { userData, data } = props;

    /* Custom parameters */
    let imgData;
    let valueData;
    let textData;
    let colorTag;

    /* For each category a tag is created with custom parameters */
    switch (data) {
        case 'calorieCount':
            imgData = energy;
            valueData = userData.calorieCount + 'kCal';
            textData = 'Calories';
            colorTag = '#FF000007';
            break;
        case 'proteinCount':
            imgData = protein;
            valueData = userData.proteinCount + 'g';
            textData = 'Proteines';
            colorTag = '#4AB8FF10';
            break;
        case 'carbohydrateCount':
            imgData = glucide;
            valueData = userData.carbohydrateCount + 'g';
            textData = 'Glucides';
            colorTag = '#F9CE2310';
            break;
        case 'lipidCount':
            imgData = lipid;
            valueData = userData.lipidCount + 'g';
            textData = 'Lipides';
            colorTag = '#FD518110';
            break;
    }

    /* Return a complete tag in each case */
    return (
        <TagShape>
            <TagImg background={colorTag}>
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
    background-color: ${(props) => props.background};
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
