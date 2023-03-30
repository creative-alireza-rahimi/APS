const Admin = require("../model/Admins");

// const Item = require("../model/Admins");

// @desc - all admin
// @route - GET '/admins'
// @access - public
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    if (!admins) return res.status(204).json({ message: "No admin found" });
    res.json(admins);
  } catch (err) {
    console.log(err);
  }
};

// @desc - all admin
// @route - GET '/admins'
// @access - public
const getAdmin = async (req, res) => {
  const { email, password } = req?.body;
  console.log(email, password);

  try {
    const admin = await Admin.findOne({ email, password });
    console.log(admin);
    if (!admin) return res.status(204).json({ message: "No admin found" });
    res.json(admin);
  } catch (err) {
    console.log(err);
  }
};

// @desc - create a admin
// @route - POST '/admins'
// @access - public
const createAdmin = async (req, res) => {
  const admin = req?.body;

  const adminObj = new Admin(
    {
      fullName: admin?.fullName,
      firstName: admin?.firstName,
      lastName: admin?.lastName,
      age: admin?.age,
      email: admin?.email,
      language: admin?.language,
      github: admin?.github,
      linkedIn: admin?.linkedIn,
      skills: admin?.skills,
      profilePhoto: admin?.profilePhoto,
      isAdmin: admin?.isAdmin,
      members: [{
        fullName: admin?.fullName,
        firstName: admin?.firstName,
        lastName: admin?.lastName,
        age: admin?.age,
        email: admin?.email,
        language: admin?.language,
        github: admin?.github,
        linkedIn: admin?.linkedIn,
        skills: admin?.skills,
        profilePhoto: admin?.profilePhoto,
        isAdmin: admin?.isAdmin,
      }]
    }
  );

  try {
    const saveAdmin = await adminObj.save();

    const result = {
      fullName: saveAdmin?.fullName,
      firstName: saveAdmin?.firstName,
      lastName: saveAdmin?.lastName,
      age: saveAdmin?.age,
      email: saveAdmin?.email,
      language: saveAdmin?.language,
      github: saveAdmin?.github,
      linkedIn: saveAdmin?.linkedIn,
      skills: saveAdmin?.skills,
      profilePhoto: saveAdmin?.profilePhoto,
      isAdmin: saveAdmin?.isAdmin,
      members: saveAdmin?.members,
      id: saveAdmin?._id.toString(),
    };

    res.json(result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// @desc - update a admin
// @route - PUT '/admins'
// @access - public
const updateAdmin = async (req, res) => {
  const { id, title, age, linkedIn, github, skill, language, isAdmin } =
    req?.body;
  if (!id) return res.status(400).json({ message: "Id parameter is required" });

  try {
    const admin = await Admin.findOne({ _id: id });
    if (!admin)
      return res
        .status(204)
        .json({ message: `No matches admin with id:${id}` });

    if (req.body?.title) admin.title = title;
    if (req.body?.age) admin.age = age;
    if (req.body?.linkedIn) admin.linkedIn = linkedIn;
    if (req.body?.github) admin.github = github;
    if (req.body?.skill) admin.skill = skill;
    if (req.body?.language) admin.language = language;
    if (req.body?.isAdmin) admin.isAdmin = isAdmin;

    await admin.save();
    const allAdmins = await admin.find();
    res.json(allAdmins);
  } catch (err) {
    console.log(err);
  }
};

// @desc - delete a admin
// @route - DELETE '/admins'
// @access - public
const deleteAdmin = async (req, res) => {
  const { id } = req?.body;
  if (!id) return res.status(400).json({ message: "id parameter is required" });

  try {
    const admin = Admin.findOne({ _id: id });
    if (!admin)
      return res
        .status(204)
        .json({ message: `no matches admin with id:${id}` });
    await admin.deleteOne();
    const allAdmins = await Admin.find();
    res.json(allAdmins);
  } catch (err) {
    console.log(err);
  }
};

// @desc - update a admin
// @route - PUT '/admins'
// @access - public
const newMember = async (req, res) => {
  const { adminId, ...members } = req?.body;
  if (!adminId) return res.status(400).json({ message: "Id parameter is required" });

  try {
    const member = await Admin.findOne({ _id: adminId });
    if (!member)
      return res
        .status(204)
        .json({ message: `No matches admin with id:${adminId}` });

    if (!member.isAdmin) return;

    member.members = [...member.members, members]

    const saveMember = await member.save();

    const result = {
      fullName: saveMember?.fullName,
      firstName: saveMember?.firstName,
      lastName: saveMember?.lastName,
      age: saveMember?.age,
      email: saveMember?.email,
      language: saveMember?.language,
      github: saveMember?.github,
      linkedIn: saveMember?.linkedIn,
      skills: saveMember?.skills,
      profilePhoto: saveMember?.profilePhoto,
      isAdmin: saveMember?.isAdmin,
      members: saveMember?.members,
      id: saveMember?._id.toString(),
    }
    console.log("result: ", result);
    // const allAdmins = await member.find(); 
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  newMember,
  getAdmin
};
