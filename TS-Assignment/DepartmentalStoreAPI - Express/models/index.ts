import { Sequelize, DataTypes } from "sequelize";

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const appConfig = require('../config/default');
const config = require(__dirname + '/../config/db/config.ts')[appConfig.ENV];
const db:any = {};

let sequelize: Sequelize | undefined;

if (config && config.use_env_variable && process.env[config.use_env_variable]) {
  sequelize = new Sequelize(<string>process.env[config.use_env_variable], config);
} else if(config) {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
} 

fs
  .readdirSync(__dirname)
  .filter((file:any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach((file:string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
