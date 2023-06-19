const router = require("express").Router();
const Categroy = require("../models/Category");

router.post("/", async (req, res) => {
  const newCat = new Categroy(req.body);
  try {
    const savedCat = await newCat.save();
    return res.status(200).json(savedCat);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allCategory = await Categroy.find();
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
