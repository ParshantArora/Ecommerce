/*
Author : Parshant Nagpal
Description :show All products
filename  : showAll.js
*/

import { showAllProducts } from  '../controllers/product';

export default {
    method : 'GET',
    path : '/product/showAll',
    config : {
        auth : 'jwt'
    },
    handler : showAllProducts
}