import axios from 'axios';
import { User } from '../types/userTypes';

export function getUsers(): Promise<User[]> {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}

export function createUser(user: User): Promise<User> {
    return axios.post('/users', user)
}