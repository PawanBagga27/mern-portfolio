const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfolioModel");
const User = require("../models/userModel");

// Utility function to send response
const sendResponse = (res, data, message = "", success = true) => {
  res.status(200).send({ data, success, message });
};

// Utility function to handle errors
const handleError = (res, error) => {
  res.status(500).send(error);
};

// GET all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const [intro, about, projects, contact, experiences, courses] =
      await Promise.all([
        Intro.find(),
        About.find(),
        Project.find(),
        Contact.find(),
        Experience.find(),
        Course.find(),
      ]);

    sendResponse(res, {
      intro: intro[0],
      about: about[0],
      projects,
      contact: contact[0],
      experiences,
      courses,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// Generic update handler
const updateEntry = (Model, name) => async (req, res) => {
  try {
    const updated = await Model.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    sendResponse(res, updated, `${name} updated successfully`);
  } catch (error) {
    handleError(res, error);
  }
};

// Generic add handler
const addEntry = (Model, name) => async (req, res) => {
  try {
    const entry = new Model(req.body);
    await entry.save();
    sendResponse(res, entry, `${name} added successfully`);
  } catch (error) {
    handleError(res, error);
  }
};

// Generic delete handler
const deleteEntry = (Model, name) => async (req, res) => {
  try {
    const deleted = await Model.findOneAndDelete({ _id: req.body._id });
    sendResponse(res, deleted, `${name} deleted successfully`);
  } catch (error) {
    handleError(res, error);
  }
};

// Routes using shared handlers
router.post("/update-intro", updateEntry(Intro, "Intro"));
router.post("/update-about", updateEntry(About, "Abouts"));
router.post("/add-experience", addEntry(Experience, "Experience"));
router.post("/update-experience", updateEntry(Experience, "Experience"));
router.post("/delete-experience", deleteEntry(Experience, "Experience"));
router.post("/add-project", addEntry(Project, "Project"));
router.post("/update-project", updateEntry(Project, "Project"));
router.post("/delete-project", deleteEntry(Project, "Project"));
router.post("/add-course", addEntry(Course, "Course"));
router.post("/update-course", updateEntry(Course, "Course"));
router.post("/delete-course", deleteEntry(Course, "Course"));
router.post("/update-contact", updateEntry(Contact, "Contact"));

// Admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      user.password = "";
      sendResponse(res, user, "Login successfully");
    } else {
      sendResponse(res, null, "Invalid username or password", false);
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;
