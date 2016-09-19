var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Association = require("./models/Association")
var Word = require("./models/Word")
mongoose.connect(process.env.MONGOLAB_JADE_URI || "mongodb://localhost/associations");

app.use("/node_modules", express.static(__dirname + '/node_modules'))
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html")
});

//===========================================================
//===========================================================

app.get('/randomWord',function(req,res){
	Word.find(function(err,words){
		var randInt = Math.floor(Math.random() * words.length)
		res.send(words[randInt].word)
	})
})

app.post('/association',function(req,res){
	var words = req.body
	var keyword = words.keyword
	var association = words.association

	Association.findOne({keyword:keyword, association:association}, function(err, ass){
		if(ass){
			ass.freq++
			ass.save()
		}
		else{
			var newAss = new Association({
				keyword:keyword,
				association:association,
				freq:1
			})
			newAss.save()
		}
	})

	res.send("gottit")
})

app.listen(4000)
