/*
Author : Parshant Nagpal
Description : Add the product
filename  : add.js
*/

import Joi from 'joi';
import { addProduct } from '../../../controllers/product';
export default {
    method: 'POST',
    path: '/product/add',
    config: {
        auth: 'jwt',
        validate: {
            payload: { 
            categoryId: Joi.string()
                .required()
                .trim()
                .error(new Error('should be a valid categoryId.'))
                .regex(/^[0-9]*$/)
                .label('categoryId'),
            name: Joi.string()
                .required()
                .trim()
                .error(new Error('should be a valid ProductName.'))
                .label('ProductName')
                .regex(/^([a-zA-Z_ ]){1,30}$/),
            description: Joi.string()
                .trim()
                .optional()
                .error(new Error('should be a valid description.'))
                .label('description')
                .regex(/^([a-zA-Z_ ]){1,100}$/),
            tags: Joi.string()
                .trim()
                .optional()
                .error(new Error('should be a valid tags.'))
                .label('tags'),
            color: Joi.string()
                .trim()
                .optional()
                .error(new Error('should be a valid color'))
                .label('tags'),
            size: Joi.string()
                .trim()
                .optional()
                .regex(/^\+?\d*$/)
                .error(new Error('should be a valid countryCode.'))
                .label('size'),
            price: Joi.string()
                .trim()
                .regex(/^\+?\d*$/)
                .error(new Error('should be a valid price'))
                .label('price'),
            images: Joi.array().items(Joi.string()).optional(),
            quantity: Joi.string()
                .trim()
                .regex(/^\+?\d*$/)
                .error(new Error('should be a valid quantity'))
                .label('quantity'),
            }
        }
    },
    handler : addProduct   
}