/*
Author : Parshant Nagpal
Description : User collection contains records of users
filename  : user.js
*/


const Sequelize = require('sequelize');
import sequelize from '../db';

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  middleName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  password : {
    type: Sequelize.STRING
  },
  countryCode: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  profileImage: {
    type: Sequelize.STRING
  },
  userRole: {
    type: Sequelize.INTEGER
  },
  authToken: {
    type: Sequelize.STRING
  },
  authTokenCreatedAT: {
    type: Sequelize.DATE
  },
  mobileVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  mobileVerifiedOtp: {
    type: Sequelize.INTEGER
  },
  emailVeified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  emailVeifiedOtp: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.INTEGER
  },
  lastLogin: {
    type: Sequelize.DATE
  },
  loginCount: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});
// show all users 
User.showAll = function() {
  return User.findAll()
}
//find user based on condition
User.findOneBasedOnCondition = function(condition) {
  return User.findOne({ where:  condition})
}
// create the new user
User.register = function(payload) {
  return User.create(payload)
}
//update the user based on condition
User.updateByCondition = function(dataToUpdated,condition) {

  return User.update(dataToUpdated, { where: condition });

}



User.sync();
//User.sync({force: true});
export default User;