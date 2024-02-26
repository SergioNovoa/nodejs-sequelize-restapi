import { Task } from "../models/task.js";

export const createTasks = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTasks = await Task.create({
      name,
      done,
      projectId
    });
    res.json(newTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findOne({
      where: {
        id,
      },
    });
    tasks.set(req.body)
    await tasks.save();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findOne({
      where: {
        id,
      },
    //   attributes: ['name']
    });
    if (!tasks) return res.status(404).json({message: 'project does not exists'})
    res.json(tasks);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};
