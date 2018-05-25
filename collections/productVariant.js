/*
Author : Parshant Nagpal
Description : productVariant collection contains all productVariants
filename  : productVariant.js
*/

import Sequelize from 'sequelize';
import sequelize from '../db';

const ProductVariant = sequelize.define('productVariant', {
    color: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    itemsSold: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});
ProductVariant.addProductVariant = (payload)=>{
    return ProductVariant.create(payload);
}
ProductVariant.sync();
export default ProductVariant;