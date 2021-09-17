import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @component
 * @returns Custom welcome with firstName and a congratulation message
 */
function Welcome(props) {
    const { user } = props;

    let message;

    /*If calorieCount is < 2000 then message takes a value else it takes another*/
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

Welcome.propTypes = {
    /**
     * User selected
     */
    user: PropTypes.object.isRequired
};

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
