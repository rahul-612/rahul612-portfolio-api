const express=require("express");
const {sendMsg}=require("../controllers/user");
const router=express.Router();

router.route("/sendMsg").post(sendMsg);

module.exports=router;