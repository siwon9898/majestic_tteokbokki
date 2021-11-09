import express from "express";

import History from "../../models/history";

const router = express.Router();

// @routes  GET api/history
// @desc    get all history
// @access  public
router.get("/", async (req, res) => {
  try {
    const histories = await History.find();
    if (!histories) throw Error("No Data");
    res.status(200).json(histories);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.massage });
  }
});

export default router;
