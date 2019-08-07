const orm = require("../config/orm")

//SQL queries imported into burger JS
//Burger object methods use the methods from ORM.js to pass data
const burger = {
    all: function(callBack) {
        orm.selectAll("burgers", (res) =>{
            callBack(res)
            // console.log(res)
        })
    },
    create: function(value, callBack) {
        orm.insertOne("burgers", "burger_name",value, (res) => {
            
            callBack(res)
        })
    },
    update: function(devourId, callBack) {
        console.log(devourId)
        orm.updateOne("burgers", "devoured", true, "id", devourId, (res) => {
            // callBack(res)
            console.log(res)
        })
    }
  
}

module.exports = burger;