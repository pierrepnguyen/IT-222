const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema ({
    artist:String,
    title: String,
    description: String
});

module.exports = mongoose.model('Album', AlbumSchema);