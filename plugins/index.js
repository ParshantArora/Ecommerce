/*
Author : Parshant Nagpal
Description : export all plugins
filename  : index.js
*/



import Rest from './rest';
import Auth from './auth';
import Inert from 'inert';
export default [

  /*
   Jwt authentication
  */
  {
    plugin: Auth,
    options: {}
  },
  /*
  Rest Api's
  */
  {
    plugin: Rest,
    options: {}
  },
  /*
 Inert Plugin 
  */
  {
    plugin: Inert,
    options: {}
  }


]