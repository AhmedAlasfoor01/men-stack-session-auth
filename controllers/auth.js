const express = require("express");
const User = require("../models/user.js");//se we check if the user exits in our datatbase

const router = express.Router();//router it allows to add object to the server js 

router.get("/sign-up", (req,res)=>{
   return res.render("auth/sign-up.ejs");
})
router.post("/sign-up", async (req, res) => {
    const userInDatabase = await User.findOne({ username: req.body.username });
if (userInDatabase) {
  return res.send("Username already taken.");
}
if (req.body.password !== req.body.confirmPassword) {// so we make sure that the passwords matches the username 
  return res.send("Password and Confirm Password must match");
}


  res.send(req.body);
});

module.exports = router;
