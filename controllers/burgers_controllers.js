const express = require("express")

const burger = require("../models/burger")

const router = express.Router()

router.get("/", (req, res) => {
    // console.log(res)
    res.render("index")
})

module.exports = router;