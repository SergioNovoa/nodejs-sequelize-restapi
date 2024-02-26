import { Project } from "../models/proyect.js";
import { Task } from "../models/task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findOne({
      where:{
        id
      }
    });
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    // const project = await Project.update({name, priority, description},{
    //   where:{
    //     id
    //   }
    // })

    res.json(project);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project) return res.status(404).json({message: 'project does not exists'})
    res.json(project);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProjectTasks = async(req, res)=>{
  try {
    const {id} = req.params;
  const tasks = await Task.findAll({
    where:{
      projectId: id
    }
  })
  res.json(tasks)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}