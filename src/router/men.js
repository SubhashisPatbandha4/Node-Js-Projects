const express=require("express")
const router = new express.Router();
const mensRanking = require("../models/mens");


router.post("/mens", async (req, resp) => {
  try {
    const { ranking, name, dob, country, score, event } = req.body;
    const mensRecords = new mensRanking({
      ranking,
      name,
      dob,
      country,
      score,
      event,
    });

    await mensRecords.save();
    return resp.status(201).json({ message: "data entered" });
    console.log(req.body);
  } catch (error) {
    console.log(error);
    return resp.status(400).json(error);
  }
});

// get method
router.get("/mens", async (req, resp) => {
  try {
    const mens = await mensRanking.find({}).sort({ ranking: 1 });

    console.log(mens);
    return resp.send(mens);
  } catch (error) {
    console.log(error);
    return resp.status(400).json(error);
  }
});

// get request for individual
router.get("/mens/:id", async (req, resp) => {
  try {
    const _id = req.params.id;
    const getmen = await mensRanking.findById(_id);

    console.log(getmen);
    return resp.send(getmen);
  } catch (error) {
    console.log(error);
    return resp.status(400).json(error);
  }
});
// patch request for individual
router.patch("/mens/:id", async (req, resp) => {
  try {
    const _id = req.params.id;
    const getmen = await mensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    console.log(getmen);
    return resp.send(getmen);
  } catch (error) {
    console.log(error);
    return resp.status(500).json(error);
  }
});
//delete request for individual
router.delete("/mens/:id", async (req, resp) => {
  try {
    const _id = req.params.id;
    const getmen = await mensRanking.findByIdAndDelete(_id);

    console.log(getmen);
    return resp.send(getmen);
  } catch (error) {
    console.log(error);
    return resp.status(500).json(error);
  }
});


module.exports=router;