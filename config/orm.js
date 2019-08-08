const connection = require("../config/connection")
// Methods to for CRUD
//CREATE READ UPDATE + DELETE
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
        //    console.log(data)
           callBack(data)
       })

   },
   updateOne: function(table, columnName, value, columnId, id, callBack){
       connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, columnName, value, columnId, id], (err, data) => {
           if(err) throw err
           callBack(data)
       })
   },
   deleteOne: function (table, columnName, id, callBack) {
       connection.query("DELETE FROM ?? WHERE ?? = ?", [table, columnName, id], (err, data) => {
           if(err) throw err
           console.log(data)
       })
   }
}

module.exports = orm;
