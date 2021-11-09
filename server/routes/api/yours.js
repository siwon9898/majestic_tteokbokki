import express from "express";

import Yours from "../../models/yours";

const router = express.Router();

// @routes  GET api/yours
// @desc    get all yours
// @access  public
router.get("/", async (req, res) => {
  try {
    const yours = await Yours.find();
    if (!yours) throw Error("No Data");
    res.status(200).json(yours);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.massage });
  }
});

// @routes  POST api/yours
// @desc    get all yours
// @access  public
router.post("/comments", async (req, res, next) => {
  console.log(req.body, "comment");
  const newComment = await Comment.create({
    comment: req.body.comment,
  });
  console.log(newComment, "newComment");
  try {
    res.json(newComment);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
export default router;
