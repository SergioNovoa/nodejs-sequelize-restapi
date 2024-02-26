import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./task.js";

export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


Project.hasMany(Task, {
    foreingKey: 'proyectId',
    sourceKey: 'id'
})

Task.belongsTo(Project,{
    foreingKey: 'proyectId',
    targetId: 'id'
})