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
  
}

module.exports = orm;
