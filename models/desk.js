'use strict';
module.exports = (sequelize, DataTypes) => {
  const Desk = sequelize.define('Desk', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: DataTypes.STRING,
    companyRpm: DataTypes.STRING,
    street: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    enabledAt: DataTypes.STRING
  }, {});
  Desk.associate = function(models) {
    Desk.hasMany(models.User)
  };
  return Desk;
};
