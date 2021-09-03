import React from 'react';
import axios from 'axios';
import './ResquestBtn.css';

function ResquestBtn(props) {
    const { dataUser, toto } = props;

    const getUser = () => {
        let id = 0;
        if (dataUser.id === 12) {
            id = 18;
        } else {
            id = 12;
        }

        const baseURL = 'http://localhost:3000/user/';

        axios.get(`${baseURL + id}`).then((response) => {
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
