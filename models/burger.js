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
    update: function(id, callBack) {
        console.log(id)
        orm.updateOne("burgers", "devoured", true, "id", id, (res) => {
            callBack(res)
        })
    },
    delete: function(id, callBack) {
        console.log(id)
        orm.deleteOne("burgers", "id", id, (res) => {
            console.log(res)
        })
    }
  
}

module.exports = burger;