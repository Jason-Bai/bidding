'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_bidding';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'bidding_dev',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '12345678',
  };

  return config;
};
