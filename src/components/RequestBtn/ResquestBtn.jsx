import React from 'react';
import styled from 'styled-components';
import API from '../../data/API';

function ResquestBtn(props) {
    const { dataUser, selectedUser } = props;

    /* If user.id is 12 then swap to user.id 18 else user.id 12 */
    const getUser = () => {
        let id = 0;
        if (dataUser.id === 12) {
            id = 18;
        } else {
            id = 12;
        }

        API.getUserById(id).then((response) => {
            selectedUser(response.data.data);
        });
    };

    return <BtnUser onClick={getUser}>Change user</BtnUser>;
}

const BtnUser = styled.button`
    background-color: black;
    color: white;
    border: none;
    height: 20px;
    width: 117px;
`;

export default ResquestBtn;
