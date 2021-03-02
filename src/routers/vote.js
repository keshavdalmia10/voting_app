const express = require("express");
const Candidate = require("../models/candidate");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();

//router.get("/candidate", async (req, res) => {
// try {
//    const candidate = await Candidate.find({});
//    res.send(candidate);
//  } catch (e) {
//    res.status(500).send();
//  }
//});

//increasing votes
router.post("/vote", auth, async (req, res) => {
  const _id = req.body._id;

  try {
    const candidate = await Candidate.findById({ _id });
    if (req.user.voted == 0) {
      candidate.vote += 1;
      req.user.voted = 1;
      await req.user.save();
      await candidate.save();
      res.status(201).send(candidate);
    } else {
      res.status(201).send("You have voted");
    }
  } catch {
    res.status(400).send();
  }
});

module.exports = router;
