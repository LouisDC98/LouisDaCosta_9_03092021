import React from 'react';
import './ResquestBtn.css';
import { getUserById } from '../../data/API';

function ResquestBtn(props) {
    const { dataUser, toto } = props;

    const getUser = () => {
        let id = 0;
        if (dataUser.id === 12) {
            id = 18;
        } else {
            id = 12;
        }

        getUserById(id).then((response) => {
            console.log(response.data.data);
            toto(response.data.data);
        });
    };

    return (
        <button onClick={getUser} className="btnUser">
            Change user
        </button>
    );
}

export default ResquestBtn;
