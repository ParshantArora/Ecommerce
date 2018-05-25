/*
Author : Parshant Nagpal
Description : Product controller
filename  : product.js
*/

import { addProductService , showAllProduct } from '../services/product';
import { successAction, failAction } from '../utilities/rest';

/*
addProduct controller
*/

export const addProduct = async (request,h)=> {
    const {payload,auth : {credentials: {user: {id}} }} = request;
    try{
    const data = await addProductService(payload,id);
     return successAction(data);
    }catch(error){
     failAction(error.message);
    }
}

/*

*/
export const showAllProducts = async (request,h) => {
   try{
    const data = await showAllProduct(); 
    return successAction(data);
  }catch(error){
    failAction(error.message);    
    }
}