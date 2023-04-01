const Task = require("../model/Tasks");
const Admin = require("../model/Admins");

// @desc - all tasks
// @route - GET '/'
// @access - public
const getTasks = async (req, res) => {
  const { adminId } = req?.query;

  try {
    const admin = await Admin.findOne({ _id: adminId });

    if (!admin) return res.status(204).json({ message: "No admin found" });

    const tasksArray = admin?.tasks?.map(task => ({
      title: task?.title,
      description: task?.title,
      members: task?.members,
      isCompleted: task?.isCompleted,
      isEdited: task?.isEdited,
      isDeleted: task?.isDeleted,
      taskId: task?._id.toString()
    }))

    res.json(tasksArray);
  } catch (err) {
    console.log(err);
  }
};

// @desc - create a task
// @route - POST '/'
// @access - public
const createTask = async (req, res) => {
  const { adminId } = req?.body;

  if (!adminId)
    return res.status(400).json({ message: "adminId is required" });

  try {
    const admin = await Admin.findOne({ _id: adminId });

    admin?.tasks?.push(req?.body);

    const task = await admin.save();

    const tasksArray = task?.tasks?.map(task => ({
      title: task?.title,
      description: task?.title,
      members: task?.members,
      isCompleted: false,
      isEdited: false,
      isDeleted: false,
      taskId: task?._id.toString(),
    }))

    res.json(tasksArray);
  } catch (err) {
    console.log(err);
  }
};

// @desc - edit a task
// @route - PUT '/'
// @access - public
const editTask = async (req, res) => {
  const { id, title, describe, userId } = req?.body;
  if (!id) return res.status(400).json({ message: "Id parameter is required" });

  try {
    const task = await Task.findOne({ _id: id });
    if (!task)
      return res.status(204).json({ message: `No matches task with id:${id}` });

    if (req.body?.title) task.title = title;
    if (req.body?.describe) task.describe = describe;
    if (req.body?.userId) task.userId = userId;

    await task.save();
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (err) {
    console.log(err);
  }
};

// @desc - complete a task
// @route - PUT '/'
// @access - public
const completeTask = async (req, res) => {
  const { id, title, describe, userId } = req?.body;
  if (!id) return res.status(400).json({ message: "Id parameter is required" });

  try {
    const task = await Task.findOne({ _id: id });
    if (!task)
      return res.status(204).json({ message: `No matches task with id:${id}` });

    if (req.body?.title) task.title = title;
    if (req.body?.describe) task.describe = describe;
    if (req.body?.userId) task.userId = userId;

    await task.save();
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (err) {
    console.log(err);
  }
};

// @desc - delete a task
// @route - DELETE '/'
// @access - public
const deleteTask = async (req, res) => {
  const { id } = req?.body;
  if (!id) return res.status(400).json({ message: "id parameter is required" });

  try {
    const task = Task.findOne({ _id: id });
    if (!task)
      return res.status(204).json({ message: `no matches task with id:${id}` });
    await task.deleteOne();
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTasks, createTask, deleteTask, completeTask, editTask };
