/*
Author : Parshant Nagpal
Description : File collection contains all file records
filename  : file.js
*/

import  Sequelize  from 'sequelize';
import sequalize from '../db';

const Files = sequalize.define('files',{
    userId : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    path : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mimeType  : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
});

/*
Insert File data to File database
*/

Files.inserData = (payload)=>{
    return Files.create(payload);
}

Files.bulkDataInsert = (payload) => {
    return Files.bulkCreate(payload,{returning: true});
}
Files.getFile = (condition)=>{
    console.log("condition",condition)
    return Files.findOne(condition);
}
Files.sync();
export default Files;