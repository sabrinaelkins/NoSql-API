const router = require('express').Router();
const db = require("../../Models/User");
const Thought = require("../../Models/Thoughts")

router.get("/api/user"), (req,res) => {
    db.find()
    .populate('friends')
    .populate('thoughs')
    .then ((records) => {
        console.timeLog("get",result)
        res.json(result)
    })
}
router.get("/api/user/:id"), (req,res) => {
    db.findOne({_id:req.params.id})
    .populate('friends')
    .populate('thoughts')
    .then ((records) => {
        console.timeLog("get id",result)
        res.json(result)
    })
}
router.post("/api/user"), (req,res) => {
    db.Create(req.body)
    .then ((records) => {
        console.timeLog("post",result)
        res.json(result)
    })
}
router.put("/api/user/:id"), (req,res) => {
    db.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
    .then ((records) => {
        console.timeLog("put",result)
        res.json(result)
    })
}
router.delete("/api/user/:id"), (req,res) => {
    db.findOneAndDelete({_id:req.params.id})
    .then ((records) => {
        Thought.deleteMany({_id:{$in:records.thoughts}})
        console.timeLog("delete",result)
        res.json(result)
    })
}
router.put("/api/user/:userid/friends/:friendsid"), (req,res) => {
    db.findOneAndUpdate({_id:req.params.userid},
        {$addToSet:{friends:req.params.friendsid}},{new:true})
    .then ((records) => {
        console.timeLog("put",result)
        res.json(result)
    })
}
module.exports = router;