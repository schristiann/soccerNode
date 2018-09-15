

var teamService = require('../services/team.service')
var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable

_this = this;


// Async Controller function to get the To do List

exports.getTeams = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    try{

        var teams = await teamService.getTeams({}, page, limit)



        return res.status(200).json({status: 200, data: teams, message: "Succesfully teams Recieved"});

    }catch(e){

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: e.message});

    }
}

exports.getTeam = async function(req, res, next){
    let selectedTeam=req.params;
    // Check the existence of the query parameters, If the exists doesn't exists assign a default value

    try{


        var team = await teamService.getTeam(selectedTeam);



        return res.status(200).json({status: 200, data: team, message: "Succesfully team Recieved"});

    }catch(e){

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: e.message});

    }
}

exports.getPlayer = async function(req, res, next) {
    let selectedPlayer= req.params.playerID;
    try{


        var player = await teamService.getPlayer(selectedPlayer);

        // Return the todos list with the appropriate HTTP Status Code and Message.

        return res.status(200).json({status: 200, data: player, message: "Succesfully player Recieved"});

    }catch(e){

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: e.message});

    }
}

exports.createPlayer = async function(req, res, next){



    var player= req.body;

    try{

        // Calling the Service function with the new object from the Request Body

        var createdPlayer = await teamService.createPlayer(player);
        return res.status(201).json({status: 201, data: createdPlayer, message: "Succesfully Created Player"})
    }catch(e){

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({status: 400, message: "Todo Creation was Unsuccesfull"})
    }
}

exports.updatePlayer = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var _id = req.body._id;

    console.log(req.body)

    var player = {
        _id: mongoose.Types.ObjectId(_id),
        playerName: req.body.playerName ? req.body.playerName : null,
        position: req.body.position ? req.body.position : null,
        playerID: req.body.playerID ? req.body.playerID : null,
        tid: mongoose.Types.ObjectId(req.body.tid) ? req.body.tid : null,
        team: req.body.team ? req.body.team : null
    }

    try{
        var updatedPlayer = await teamService.updatePlayer(player)
        return res.status(200).json({status: 200, data: updatedPlayer, message: "Succesfully Updated Tod"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removePlayer = async function(req, res, next){

    var id = req.params.playerID;

    try{
        var deleted = await teamService.deletePlayer(id);
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}