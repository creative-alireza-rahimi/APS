const express = require("express");

const {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
  editTask
} = require("../../controller/taskController");

const {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  newMember,
  getAdmin
} = require("../../controller/adminController");

const router = express.Router();

// Task
router
  .route("/tasks/getTasks")
  .get(getTasks)

router
  .route("/tasks/newTask")
  .post(createTask)

router
  .route("/tasks/editTask")
  .put(editTask)

router
  .route("/tasks/deleteTask")
  .put(deleteTask);

router
  .route("/tasks/completeTask")
  .put(completeTask);

// Admin
router
  .route("/admin")
  .get(getAllAdmins)
  .put(updateAdmin)
  .delete(deleteAdmin);

router
  .route("/admin/newAdmin")
  .post(createAdmin)

router
  .route("/admin/newMember")
  .put(newMember)

router
  .route("/login/getAdmin")
  .post(getAdmin)


module.exports = router;
