/*
Author : Parshant Nagpal
Description : Project all pluin register and start the server
filename  : account.js
*/
import User from './collections/user'
import Hapi from 'hapi';
import plugins from './plugins';

export default async () => {
    const server=Hapi.server({
        host:'localhost',
        port:8000
    });
    
    /*
    All Plugin registers
    */
   await server.register(plugins);

    
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};







/*






    // Add the route
    server.route({
      method:'GET',
      path:'/viewAll',
      handler: async function(request,h) {
   
     try{
      let data = await User.showAll();
      console.log("data",data)
      if(data){
        return data
      }
     }catch(err){
       console.log(err)
      return "error"
     }
      }
     
  });
  
  // Add the route
  server.route({
    method:'GET',
    path:'/add',
    handler: async function(request,h) {
  
     let data =  await User.create({
        firstName: 'parshant',
        lastName: 'nagpal'
      });
      if(data){
        return({data})
      }else{
        return ({data : "yo man"})
      }
    }
  });
  // Add the route
  server.route({
    method:'GET',
    path:'/update',
    handler: async function(request,h) {
  
      let data =  await User.update({ firstName: 'arora'}, {
        where: { firstName: "parshant" }});
       if(data){
        return({data})
      }else{
        return ({data : "yo man"})
      }
    }
  });
  
  
  // Add the route
  server.route({
    method:'GET',
    path:'/delete',
    handler: async function(request,h) {
   
      let data =  await User.destroy({
        where: { firstName: "parshant" }});
       if(data){
        return({data})
      }else{
        return ({data : "yo man"})
      }
    }
  });
  */