//Import  Mongoose Module
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/GoodsDb');


var Schema = mongoose.Schema;


var PdtsModelSchema = new Schema(
    {
        PdtId: Schema.Types.Number,
        Pdname: Schema.Types.String,
        Pdprice: Schema.Types.Number,
        PdStandard: Schema.Types.Number,

    },
    { versionKey: false });

// Create Model Object	

var PdtsModel = mongoose.model('Pdts', PdtsModelSchema);

// Exporting DeptModel 
module.exports = PdtsModel;