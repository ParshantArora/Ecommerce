/*
Author : Parshant Nagpal
Description : productCategories collection contains all products categories
filename  : productCategories.js
*/

import Sequelize from 'sequelize';
import sequelize from '../db';

const ProductCategories = sequelize.define('productCategories',{
    categoryName : {
        type: Sequelize.STRING
      }
});
ProductCategories.sync();
export default ProductCategories;