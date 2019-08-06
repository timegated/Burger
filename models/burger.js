const orm = require("../config/orm")


const burger = {
    all: function(callBack) {
        orm.selectAll("burgers", (res) =>{
            console.log(res)
            callBack(res)
        })
    }
}

module.exports = burger;