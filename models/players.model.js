var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var playerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    playerID: Number,
    playerName: String,
    team: String,
    position: String,
    tid: {type: mongoose.Schema.Types.ObjectId, ref: 'teams'}
})

playerSchema.plugin(mongoosePaginate);
const Player = mongoose.model('player', playerSchema)

module.exports = Player;
