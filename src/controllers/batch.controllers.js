const express = require("express");

const Batch = require("../models/batch.models");

const crudController = require("./crud.controllers");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const batch = await Batch.find()
      .populate({
        path: "userId",
        select: ["title"],
        populate: { path: "userId" },
      })
      .populate({ path: "studentId" })
      .lean()
      .exec();

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Batch));

router.get("/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id)
      .populate({
        path: "userId",
        populate: { path: "userId"},
      })
      .populate({ path: "studentId" })
      .lean()
      .exec();

    return res.status(201).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate({
        path: "userId",
        populate: { path: "userId" },
      })
      .populate({ path: "studentId" })
      .lean()
      .exec();

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Batch));

module.exports = router;
