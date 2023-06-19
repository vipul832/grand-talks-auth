const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");

//CREATE POST

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  console.log(newPost);
  try {
    const savedPost = await newPost.save();
    console.log(savedPost);
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//UPDATE POST

router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post);
    if (post.userId === req.body.userId) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json({ "Updated Posts": updatedPost });
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(401).json("You can update only your posts!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//DELETE POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post);
    if (post.username === req.body.username) {
      try {
        // await post.delete();
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json({ "Deleted Posts": post });
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(401).json("You can Delete only your posts!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//get post by admin tabs

router.get("/adminblog/", async (req, res) => {
  const userId = req.query.id;
  const blogStatus = req.query.status;
  try {
    const post = await Post.find({
      userId: userId,
      status: blogStatus,
    }).sort({ _id: -1 });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(err);
  }
});

//GET POSTS

// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     return res.status(200).json(post);
//   } catch (error) {
//     return res.status(500).json(err);
//   }
// });

// FINAL GET REQUEST
router.get("/", async (req, res) => {
  try {
    //getting the page and limit and setting default is not provided
    // console.log("body", req.body);
    const pageOptions = {
      page: parseInt(req.query.page - 1, 10) || 0,

      limit: parseInt(req.query.limit, 10) || 10,
    };
    const category = req.query.cat;

    if (pageOptions.page <= 0) pageOptions.page = 0;
    if (pageOptions.limit <= 1) pageOptions.limit = 10;

    //counting total doc
    if (category === "view_all") {
      const totalDoc = await Post.count({
        status: "publish",
        $and: [
          {
            title: { $regex: req.query.search, $options: "i" },
          },
        ],
      });
      const totalPages = Math.ceil(totalDoc / pageOptions.limit);
      const posts = await Post.find({
        status: "publish",
        status: "publish",
        $and: [
          {
            title: { $regex: req.query.search, $options: "i" },
          },
        ],
      })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ _id: -1 });
      return res.status(200).json({
        message: "items fetched successfully",
        posts,
        totalDoc,
        totalPages,
        category,
      });
    } else {
      const totalDoc = await Post.count({
        category: category,
        status: "publish",
        $and: [
          {
            title: { $regex: req.query.search, $options: "i" },
          },
        ],
      });
      const totalPages = Math.ceil(totalDoc / pageOptions.limit);
      const posts = await Post.find({
        category: category,
        status: "publish",
        $and: [
          {
            title: { $regex: req.query.search, $options: "i" },
          },
        ],
      })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .sort({ _id: -1 });
      return res.status(200).json({
        message: "items fetched successfully",
        posts,
        totalDoc,
        totalPages,
        category,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
});

module.exports = router;
