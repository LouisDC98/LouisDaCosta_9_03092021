import React from 'react';
import './Welcome.css';

function Welcome(props) {
    const { user } = props;

    let message;
    if (user.keyData.calorieCount < 2000) {
        message = 'Vous pouvez encore le faire, un petit effort 💪';
    } else {
        message = 'Félicitation ! Vous avez explosé vos objectifs hier 👏';
    }

    return (
        <React.Fragment>
            <div className="shapeWelcome">
                <h1>
                    Bonjour <span className="nameWelcome">{user.userInfos.firstName}</span>
                </h1>
                <p className="messageWelcome">{message}</p>
            </div>
        </React.Fragment>
    );
}

export default Welcome;
