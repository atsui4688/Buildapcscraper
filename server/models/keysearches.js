'use strict';
module.exports = (sequelize, DataTypes) => {
  const keysearches = sequelize.define('keysearches', 
  {
    title: 
    {
    	type: DataTypes.STRING, 
    	unique: true,
    },
    itemtype:
    {
    	type: DataTypes.STRING,
    },

  }, {});

  keysearches.associate = (models) => {
    // associations can be defined here
    keysearches.hasMany(models.searchresults,
    {
        foreignKey: 'searchterm',
        as: 'searchresults',

    });
  };

  return keysearches;
};