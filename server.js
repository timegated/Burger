const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const routes = require("./controllers/burgers_controllers")
const PORT = process.env.PORT || 3000
app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view", "handlebars")

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server works listening on ${PORT}`)
})
