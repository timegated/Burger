const mysql = require("mysql")

        connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user: "root",
        password: "Jabbawocky45",
        database:"burgers_db"
    
    })


connection.connect((err) => {
    if(err) {
        console.log(`You got an error ${err}`)
       
    }
    console.log(`You're connected as ${connection.threadId}`)
})

module.exports = connection;