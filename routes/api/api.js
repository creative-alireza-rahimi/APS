const express = require("express");

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
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

router
  .route("/")
  .get(getAllTasks)
  .post(createTask)
  .put(updateTask)
  .delete(deleteTask);

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
  .get(getAdmin)


module.exports = router;
