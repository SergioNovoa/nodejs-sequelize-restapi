import Sequelize  from "sequelize";

export const sequelize = new Sequelize('proyectsdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });