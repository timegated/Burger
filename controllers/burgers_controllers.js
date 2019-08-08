const express = require("express")

const burger = require("../models/burger")

const router = express.Router()
//routes data request. Data contained in Object, data from SQL.
router.get("/", (req, res) => {
    burger.all((data)=>{
        let hbsObject = {
            burgers:data
        }
      
        res.render("index", hbsObject)
        
    })
})


router.post('/api/burgers', (req,res) => {
    burger.create(req.body.burger_name, () => {
       
        res.json({id: res.insertId})
    })
})

router.put('/api/burgers/:id', (req, res) => {
    
    burger.update(req.params.id, () => {
        console.log(res)
        console.log(req.body)
        res.json({id: res.insertId})
       
    })
})





module.exports = router;