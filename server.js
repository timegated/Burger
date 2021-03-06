const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./controllers/burgers_controllers.js");

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(express.static("public"));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server works listening on ${PORT}`);
})
