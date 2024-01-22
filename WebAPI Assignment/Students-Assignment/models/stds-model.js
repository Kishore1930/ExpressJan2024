//Import  Mongoose Module
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/testdb');

// Create  schema
var Schema = mongoose.Schema;


var StdsModelSchema = new Schema(
    {
        StdId: Schema.Types.Number,
        Sname: Schema.Types.String,
        Srank: Schema.Types.Number,
        Savg: Schema.Types.Number,
        Saddress: Schema.Types.String
    },
    { versionKey: false });

// Create Model Object	
var StdsModel = mongoose.model('Stds', StdsModelSchema);

// Exporting DeptModel 
module.exports = StdsModel;