
import Product from '../collections/product';
import ProductVariant from '../collections/ProductVariant';



export const addProductService = async (payload,id) => {
    let res  = payload.tags.split(',');
    let dataVariant = await ProductVariant.addProductVariant(payload)
    if(!dataVariant){
        throw new Error('product not added');
      }
     console.log("dataVariant",dataVariant)
     payload = {...payload,variantID : dataVariant.id,userId : id,tags : res};
    let data = await Product.addProduct(payload);
    if(data){
        return(data);
    }
    else{
         throw new Error('product not added');
     }
}

export const showAllProduct = async () => {
 let data = await Product()
}