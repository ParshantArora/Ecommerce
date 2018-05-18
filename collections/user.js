const Sequelize = require('sequelize');
import sequelize from '../db';

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

export default User;