import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import API from 'data/API';

/**
 * @component
 * @returns Button to change user
 */
function ResquestBtn(props) {
    const { dataUser, selectedUser } = props;

    /**
     * Swap between 2 users
     */
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

ResquestBtn.propTypes = {
    /**
     * Users data
     */
    dataUser: PropTypes.object.isRequired,
    /**
     * User selected
     */
    selectedUser: PropTypes.func.isRequired
};

const BtnUser = styled.button`
    background-color: black;
    color: white;
    border: none;
    height: 20px;
    width: 117px;
`;

export default ResquestBtn;
