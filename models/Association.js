var mongoose = require('mongoose')
var Schema = mongoose.Schema

var associationSchema = new Schema({ 
    keyword: String,
    association:String,
    freq: Number
});

var model = mongoose.model("AssociationModel", associationSchema)

module.exports = model