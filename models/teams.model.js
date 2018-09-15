var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var teamSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    teamID: Number,
    teamName: String,
    players: [{type: mongoose.Schema.Types.ObjectId, ref: 'player'}]
});

teamSchema.plugin(mongoosePaginate)
const Team = mongoose.model('team', teamSchema)

module.exports = Team;
