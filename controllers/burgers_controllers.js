const express = require("express")

const burger = require("../models/burger")

const router = express.Router()
//routes data request. Data contained in Object, data from SQL.
router.get("/", (req, res) => {
    burger.all((data)=>{
        let hbsObject = {
            burgers:data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

// router.get('/api/burgers', (req, res) => {
//     res.send(req.body.burger_name)
// })

router.post('/api/burgers', (req,res) => {
    burger.create(req.body.burger_name, () => {
        res.json({id: res.insertId})
    })
})

router.put('/api/burgers/:id', (req, res) => {
    console.log(req.params.id)
    burger.update(req.params.id, (res) => {

        res.json(res)
    })
})


module.exports = router;