# 7/30 NOTES

## Express Rundown
+ var express = require('express')
+ var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);

## 
