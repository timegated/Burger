const mysql = require("mysql")
if(process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
        connection = mysql.createConnection({
        host:'localhost',
        port:3000,
        user: 'root',
        password: 'Jabbawocky45',
        database:'burger_db'
    
    })
}

connection.connect((err) => {
    if(err) {
        console.log(`You got an error ${err}`)
        return
    }
    console.log(`You're connected as ${connection.threadId}`)
})

module.exports = connection;