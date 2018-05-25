/*
Author : Parshant Nagpal
Description : Product collection contains all products
filename  : product.js
*/

import Sequelize from 'sequelize';
import sequelize from '../db';

const Product = sequelize.define('product',{
    userId  :  {
        type: Sequelize.STRING
      },
    name : {
        type: Sequelize.STRING
      },
    description : {
        type: Sequelize.STRING
      },
    categoryId : {
        type: Sequelize.STRING
      },
    variantID :  {
        type: Sequelize.STRING
      },
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
});
Product.addProduct=(payload)=>{
   return Product.create(payload);
}
Product.sync();
export default Product;