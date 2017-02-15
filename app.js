var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("node/modules/bootstrap/dist"));

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(3000, function () {
    console.log('Chatt app listening on port 3000!');
});

