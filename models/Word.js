var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({ 
    word: String,
});

var model = mongoose.model("ModelName", schema)

module.exports = model