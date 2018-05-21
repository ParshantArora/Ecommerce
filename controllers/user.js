/*
Author : Parshant Nagpal
Description : User controller
filename  : user.js
*/

import { register, login, logout } from '../services/user'
import { successAction, failAction } from '../utilities/rest'

/*
register user controller
*/
export const registerUser = async (request, h) => {

    const { payload } = request;
    try {
        const data = await register(payload);
        return successAction(data)
    } catch (error) {
        failAction(error.message)
    }

}

/*
login user controller
*/

export const loginUser = async (request, h) => {
    const { payload } = request;
    try {
        const data = await login(payload);
        return successAction(data)
    } catch (error) {
        failAction(error.message)
    }
}

/*
logout user controller
*/

export const logoutUser = async (request, h) => {
    try {
        const data = await logout(request.auth.credentials.user.id);
        return successAction(data)
    } catch (error) {
        failAction(error.message)
    }
}