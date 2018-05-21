/*
Author  : Parshant Nagpal
Description :  Main file creates connection to database and registe the plugin
file name : index.js
*/

'use strict';

import  {connectDatabase} from './db'
import configureServer from './server';
connectDatabase();
configureServer();