/*
Author : Parshant Nagpal
Description : Constains all buissness logic related user
filename  : account.js
*/


import User from '../collections/user';
import { bcryptPassword, comparepassword } from '../utilities/bcrypt';
import { tokenCreate } from '../utilities/auth';


export const register = async payload => {
    /*
    check by email id if email exists then throw error
    */
    let emailCheck = await User.findOneBasedOnCondition({email: payload.email});
    if (emailCheck) {
        throw new Error("email alredy registered")
    }

    /*
    check by phone number if number exists then throw error
    */
    
    let phonecheck = await User.findOneBasedOnCondition({phoneNumber: payload.phoneNumber});
    if (phonecheck) {
        throw new Error("Phone number already registered")
    }
    let passwordHashedData = await bcryptPassword(payload.password);
    payload = { ...payload, password: passwordHashedData };

    let saveddata = await User.register(payload)
    if (saveddata) {
        return (saveddata)
    } else {
        throw new Error("User not saved")
    }
};

export const login = async payload => {
    /*
    check if email id if email exists if not exists then throw error
    */
    let dataCheck = await User.findOneBasedOnCondition({email: payload.email});
    if (!dataCheck) {
        throw new Error("No user with this emailid")
    }
    let isPasswordVerify = await comparepassword(payload.password, dataCheck.password);
    console.log("isPasswordVerify", isPasswordVerify)
    if (!isPasswordVerify) {
        throw new Error("password is incorrect")
    }
    let tokendata = await tokenCreate(payload);
    console.log("tokendata", tokendata)
    let updateData = await User.updateByCondition({ authToken: tokendata }, {id : dataCheck.id})
    if (updateData) {
        return ({ auth: tokendata })
    } else {
        throw new Error("User not saved")
    }

}

export const logout = async payload => {
    let logoutdata = await User.updateByCondition({ authToken: '' },  {id : payload});
    console.log("logoutdata",logoutdata)
    if (logoutdata) {
        return ({ message: "User is successfully logout" })
    } else {
        throw new Error("User not saved")
    }
}
