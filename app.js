var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));



//ROUTES

// home page
app.get('/', function(req, res) {
    res.render('index');
});

// search page
app.get("/search", (req, res) => {
    res.render("search")
})

// search results
app.get("/search_result", function(req, res) {
    var input = req.query.input;
    fs.readFile("./countries.json", function(err, data) {
        if (err) {
            throw err
        }
        var parsedJson = JSON.parse(data);
        var output = parsedJson.find(element => {
            return element.name.toLowerCase() === input.toLowerCase();
        });
        console.log(output)
        res.send({ output: output })
    })
})

// about page
app.get("/about", (req, res) => {
    res.render("about")
})


app.listen(3000, function(res) {
    console.log("App listening on port 3000!");
})
