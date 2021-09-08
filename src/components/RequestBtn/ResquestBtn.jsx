import React from 'react';
import styled from 'styled-components';
import API from '../../data/API';

function ResquestBtn(props) {
    const { dataUser, selectedUser } = props;

    const getUser = () => {
        let id = 0;
        if (dataUser.id === 12) {
            id = 18;
        } else {
            id = 12;
        }

        API.getUserById(id).then((response) => {
            console.log(response.data.data);
            selectedUser(response.data.data);
        });
    };

    return <BtnUser onClick={getUser}>Change user</BtnUser>;
}

const BtnUser = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    height: 20px;
`;

export default ResquestBtn;
