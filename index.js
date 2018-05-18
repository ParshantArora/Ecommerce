/*
Author  : Parshant Nagpal
Description :  Main file creates connection to database and registe the plugin
file name : index.js
*/

'use strict';

const Hapi=require('hapi');
var mysql = require('mysql');
const Sequelize = require('sequelize');
import  {connectDatabase} from './db'
import User from './collections/user'

connectDatabase();
// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});
/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : 'Ecommerce',
});*/



// Add the route
server.route({
    method:'GET',
    path:'/viewAll',
    handler: async function(request,h) {
 
   try{
    let data = await User.findAll();
    if(data){
      return data
    }
   }catch(err){
    return "error"
   }
     
      
    /*  try{
       let user = await con.query("SELECT *  from User");
       console.log(user)
       return ({"data" : user});
      }catch(err){
        console.log(err)
        return ({data : err});
      }*/
   
    
     // return "dsfjkjsdfk"
     // return ({data : array});
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
    
    /*con.query("INSERT INTO User (name,password) VALUES ('PARSHANT', 'PARSHANT@123')", function (err, result) {
      if (err) throw err;
      console.log("yooooo",result);
      console.log("Database created")    
      
    });
    return ({data : "djuhsdj"});*/
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
  
    
    /*con.query("INSERT INTO User (name,password) VALUES ('PARSHANT', 'PARSHANT@123')", function (err, result) {
      if (err) throw err;
      console.log("yooooo",result);
      console.log("Database created")    
      
    });
    return ({data : "djuhsdj"});*/
  }
});


// Add the route
server.route({
  method:'GET',
  path:'/delete',
  handler: async function(request,h) {
 
    let data =  await User.destroy({
      where: { firstName: "arora" }});
     if(data){
      return({data})
    }else{
      return ({data : "yo man"})
    }
  
    
    /*con.query("INSERT INTO User (name,password) VALUES ('PARSHANT', 'PARSHANT@123')", function (err, result) {
      if (err) throw err;
      console.log("yooooo",result);
      console.log("Database created")    
      
    });
    return ({data : "djuhsdj"});*/
  }
});
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE TABLE IF NOT EXISTS User( id INT unsigned NOT NULL AUTO_INCREMENT,  name VARCHAR(150) NOT NULL, password VARCHAR(250) NOT NULL, PRIMARY KEY (id)  );", function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Database created")    
});



});
*/
// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
