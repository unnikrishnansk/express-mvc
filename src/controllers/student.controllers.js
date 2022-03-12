const express = require("express");

const Comment = require("../models/comment.models");
const Post = require("../models/student.models");

const crudController = require("./crud.controllers");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const student = await Student.find()
      .populate({
        path: "userId",
      })
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.student("", crudController.student(Student));

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate({ path: "userId"})
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({ path: "userId"})
      .lean()
      .exec();

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Student));


module.exports = router;
