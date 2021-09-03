import axios from 'axios';

export async function getInitialUser() {
    return axios.get(`${'http://localhost:3000/user/' + 12}`);
}

export async function getUserById(id) {
    return axios.get(`${'http://localhost:3000/user/' + id}`);
}
