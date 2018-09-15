
var Teams = require('../models/teams.model');
var Player = require('../models/players.model');
var mongoose= require ('mongoose');
//var selectedTeam= require('../models/player.model');

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the To do List
exports.getTeams = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }

    // Try Catch the awaited promise to handle the error

    try {
        var allTeams = await Teams.paginate(query, options);


        return allTeams;

    } catch (e) {

        // return a Error message describing the reason
        throw Error('Error while getting teams')
    }
}

exports.getTeam = async function(id){
    var selected= id;





    try {

        var chosenTeam = await Teams.findById(selected);
        var chosenPlayers= await Player.find({tid: selected});
        chosenTeam.players=chosenPlayers;
        return chosenTeam;

    } catch (e) {


        throw Error('Error while getting team')
    }
}

exports.getPlayer= async function(playerID){
    try {
        var chosenPlayer= await Player.findById(playerID);

        return chosenPlayer;

    } catch (e) {

        // return a Error message describing the reason
        throw Error('Error while getting players')
    }
}

exports.createPlayer = async function(player){

    try {

        var newPlayer = new Player({
            _id: new mongoose.Types.ObjectId(),
            team: player.team,
            playerID: player.playerID,
            position: '',
            playerName: player.playerName,
            tid: mongoose.Types.ObjectId(player.tid)
        });





        var savedPlayer = await newPlayer.save()

        return savedPlayer;
    }catch(e){
        console.log(e.message);
        // return a Error message describing the reason
        throw Error("Error while creating player")
    }
}

exports.updatePlayer = async function(player){
    var id = player._id;

    try{


        var oldPlayer = await Player.findById(mongoose.Types.ObjectId(id));
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    if(!oldPlayer){
        return false;
    }

    console.log(oldPlayer)


    oldPlayer.playerID = player.playerID
    oldPlayer.team = player.team
    oldPlayer.tid = player.tid
    oldPlayer.position = player.position
    oldPlayer.playerName = player.playerName
    oldPlayer._id = player._id


    console.log(oldPlayer)

    try{
        var savedTodo = await oldPlayer.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deletePlayer = async function(id){


    try{
        var deleted = await Player.deleteOne({_id: mongoose.Types.ObjectId(id)});
        if(deleted.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}