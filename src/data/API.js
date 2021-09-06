import axios from 'axios';

export async function getInitialUser() {
    return axios.get(`${'http://localhost:3000/user/' + 12}`);
}

export async function getUserById(id) {
    return axios.get(`${'http://localhost:3000/user/' + id}`);
}

export async function getActivity(id) {
    return axios.get(`${'http://localhost:3000/user/' + id + '/activity'}`);
}

export async function getSessionDuration(id) {
    return axios.get(`${'http://localhost:3000/user/' + id + '/average-sessions'}`);
}

export async function getSessionIntensity(id) {
    return axios.get(`${'http://localhost:3000/user/' + id + '/performance'}`);
}
