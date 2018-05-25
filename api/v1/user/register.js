/*
Author : Parshant Nagpal
Description :export the register route
filename  : register.js
*/

import Joi from 'Joi';
import { registerUser } from '../../../controllers/user'
export default {
    method: 'POST',
    path: '/user/register',
    config: {
        auth: false,
        validate: {
            payload: { 
                firstName: Joi.string()
                    .required()
                    .trim()
                    .error(new Error('should be a valid firstName.'))
                    .label('firstName')
                    .regex(/^([a-zA-Z_ ]){1,20}$/), 
                middleName: Joi.string()
                    .trim()
                    .optional()
                    .error(new Error('should be a valid middleName.'))
                    .label('firstName')
                    .regex(/^([a-zA-Z_ ]){1,20}$/), 
                lastName: Joi.string()
                    .trim()
                    .optional()
                    .error(new Error('should be a valid lastName.'))
                    .label('firstName')
                    .regex(/^([a-zA-Z_ ]){1,20}$/), 
                email: Joi.string()
                    .trim()
                    .required()
                    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                    .error(new Error('should be a valid email.'))
                    .label('Email'),
                countryCode : Joi.string()
                    .trim()
                    .required()
                    .min(1)
                    .max(3)
                    .regex(/^\+?\d*$/)
                    .error(new Error('should be a valid countryCode.'))
                    .label('countryCode'),
                phoneNumber: Joi.string()
                    .trim()
                    .regex(/^[0-9]*$/)
                    .min(1)
                    .max(10)
                    .error(new Error('Phone number is required'))
                    .required(),
                password: Joi.string()
                    .min(1)
                    .max(20)
                    .error(new Error('Password is required'))
                    .required(),
                userRole: Joi.string()
                    .trim()
                    .error(new Error('UserRole is required'))
                    .required(),
              profileImage : Joi.string()
              .trim()
              .optional()
              .error(new Error('profileImage is required')),   
            }
        }
    },
    handler: registerUser
}