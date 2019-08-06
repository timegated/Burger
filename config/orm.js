const connection = require("../config/connection")
// Methods to for CRUD

const orm = {
    selectAll: function(table, callBack) {
        connection.query("SELECT * FROM ??",[table], (err, data) => {
            if(err) throw err
            callBack(data)
        })
    },
    // insertOne: function() {

    // },
    // updateOne: function() {

    // }
}

module.exports = orm;
