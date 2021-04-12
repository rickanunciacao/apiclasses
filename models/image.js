var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    description: String,
    created: Date
},
{timestamps: true}
);


module.exports = mongoose.model('Image', imageSchema);