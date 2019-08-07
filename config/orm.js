const connection = require("../config/connection")
// Methods to for CRUD
//All of the SQL queries go here, exported to burger.js
const orm = {
    selectAll: function(table, callBack) {
        connection.query("SELECT * FROM ??",[table], (err, data) => {
            if(err) throw err
            
            callBack(data)
        })
    },
   insertOne: function(table, columnName, value, callBack) {
      value = connection.escape(value)
       connection.query("INSERT INTO ?? (??) VALUES (?)", [table, columnName, value] , (err, data) => {
           if(err) throw err
           console.log(data)
        //    callBack(data)
       })
   }
}

module.exports = orm;
