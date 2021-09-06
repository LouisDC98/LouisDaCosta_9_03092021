import React from 'react';
import styled from 'styled-components';

function Welcome(props) {
    const { user } = props;

    let message;
    if (user.keyData.calorieCount < 2000) {
        message = 'Vous pouvez encore le faire, un petit effort 💪';
    } else {
        message = 'Félicitation ! Vous avez explosé vos objectifs hier 👏';
    }

    return (
        <WelcomeShape>
            <WelcomeTitle>
                Bonjour <WelcomeName>{user.userInfos.firstName}</WelcomeName>
            </WelcomeTitle>
            <WelcomeMessage>{message}</WelcomeMessage>
        </WelcomeShape>
    );
}

const WelcomeShape = styled.div`
    height: 150px;
`;

const WelcomeTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 10px;
`;

const WelcomeName = styled.span`
    color: red;
`;

const WelcomeMessage = styled.p`
    font-size: 18px;
    margin: 0;
`;

export default Welcome;
