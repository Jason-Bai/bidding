'use strict';

const { sequelize } = require('../config/config.unittest');
const execSync = require('child_process').execSync;

execSync(`mysql -h ${sequelize.host} -u${sequelize.username} -p${sequelize.password} < ${__dirname}/test-data.sql`);

console.log('create db success');
