var express =require('express');
var router = express.Router();
/*old code for when nodejs acted as a mock server*/
var liverpoolPlayers= [
    { playerID: 1, playerName: 'Mo Salah', position: 'forward', team: 'liverpool'},
    { playerID: 2, playerName: 'Alisson Becker', position: 'goal keeper', team: 'liverpool'},
    { playerID: 3, playerName: 'Sadio Mane', position: 'forward', team: 'liverpool'},
    { playerID: 4, playerName: 'Robert Firmino', position: 'forward', team: 'liverpool'},
    { playerID: 5, playerName: 'Naby Keita', position: 'midfield', team: 'liverpool'},
    { playerID: 6, playerName: 'Alex Oxlade-Chamberlain', position: 'midfield', team: 'liverpool'},
    { playerID: 7, playerName: 'Jordan Henderson', position: 'midfield', team: 'liverpool'},
    { playerID: 8, playerName: 'Virgil Van Dijk', position: 'defender', team: 'liverpool'},
    { playerID: 9, playerName: 'Joe Gomez', position: 'defender', team: 'liverpool'},
    { playerID: 10, playerName: 'Andrew Robertson', position: 'defender', team: 'liverpool'},
    { playerID: 11, playerName: 'Trent Alexander-Arnold', position: 'defender', team: 'liverpool'},
];

var chelseaPlayers= [
    { playerID: 1, playerName: 'Thibaut Courtois', position: 'goal keeper', team: 'chelsea'},
    { playerID: 2, playerName: 'Cesar Azpilicueta', position: 'defender', team: 'chelsea'},
    { playerID: 3, playerName: 'Andreas Christensen', position: 'defender', team: 'chelsea'},
    { playerID: 4, playerName: 'Antonio Rudiger', position: 'defender', team: 'chelsea'},
    { playerID: 5, playerName: 'Marcos Alonso', position: 'defender', team: 'chelsea'},
    { playerID: 6, playerName: 'N’Golo Kante', position: 'midfield', team: 'chelsea'},
    { playerID: 7, playerName: 'Jorginho', position: 'midfield', team: 'chelsea'},
    { playerID: 8, playerName: 'Ruben Loftus-Cheek', position: 'midfield', team: 'chelsea'},
    { playerID: 9, playerName: 'Willian', position: 'forward', team: 'chelsea'},
    { playerID: 10, playerName: 'Alvaro Morata', position: 'forward', team: 'chelsea'},
    { playerID: 11, playerName: 'Eden Hazard', position: 'forward', team: 'chelsea'},
];

var manuPlayers= [
    { playerID: 1, playerName: 'De Gea', position: 'goal keeper', team: 'manu'},
    { playerID: 2, playerName: 'Valencia', position: 'defender', team: 'manu'},
    { playerID: 3, playerName: 'Smalling', position: 'defender', team: 'manu'},
    { playerID: 4, playerName: 'Linedlof', position: 'defender', team: 'manu'},
    { playerID: 5, playerName: 'Young', position: 'defender', team: 'manu'},
    { playerID: 6, playerName: 'Fred', position: 'midfield', team: 'manu'},
    { playerID: 7, playerName: 'Matic', position: 'midfield', team: 'manu'},
    { playerID: 8, playerName: 'Pogba', position: 'midfield', team: 'manu'},
    { playerID: 9, playerName: 'Lukaku', position: 'forward', team: 'manu'},
    { playerID: 10, playerName: 'Lingard', position: 'forward', team: 'manu'},
    { playerID: 11, playerName: 'Sanchez', position: 'forward', team: 'manu'},
];

var mancityPlayers= [
    { playerID: 1, playerName: 'Caballero', position: 'goal keeper', team: 'mancity'},
    { playerID: 2, playerName: 'Kolarov', position: 'defender', team: 'mancity'},
    { playerID: 3, playerName: 'Stones', position: 'defender', team: 'mancity'},
    { playerID: 4, playerName: 'Zabaleta', position: 'defender', team: 'mancity'},
    { playerID: 5, playerName: 'Fernandinho', position: 'defender', team: 'mancity'},
    { playerID: 6, playerName: 'Toure', position: 'midfield', team: 'mancity'},
    { playerID: 7, playerName: 'De Bruyne', position: 'midfield', team: 'mancity'},
    { playerID: 8, playerName: 'Silva', position: 'midfield', team: 'mancity'},
    { playerID: 9, playerName: 'Sane', position: 'forward', team: 'mancity'},
    { playerID: 10, playerName: 'Sterling', position: 'forward', team: 'mancity'},
    { playerID: 11, playerName: 'Aguero', position: 'forward', team: 'mancity'},
];

var tottenhamPlayers= [
    { playerID: 1, playerName: 'Lloris', position: 'goal keeper', team: 'tottenham'},
    { playerID: 2, playerName: 'Trippier', position: 'defender', team: 'tottenham'},
    { playerID: 3, playerName: 'AlderWeireld', position: 'defender', team: 'tottenham'},
    { playerID: 4, playerName: 'Vertonghen', position: 'defender', team: 'tottenham'},
    { playerID: 5, playerName: 'Rose', position: 'defender', team: 'tottenham'},
    { playerID: 6, playerName: 'Dembele', position: 'midfield', team: 'tottenham'},
    { playerID: 7, playerName: 'Dier', position: 'midfield', team: 'tottenham'},
    { playerID: 8, playerName: 'Alli', position: 'midfield', team: 'tottenham'},
    { playerID: 9, playerName: 'Eriksen', position: 'midfield', team: 'tottenham'},
    { playerID: 10, playerName: 'Moura', position: 'forward', team: 'tottenham'},
    { playerID: 11, playerName: 'Kane', position: 'forward', team: 'tottenham'},
];

var teams= [
    {teamID: 1, teamName: 'Liverpool'
    }
    , {teamID: 2, teamName: 'Chelsea'
    }
    , {teamID: 3, teamName: 'Manchester United'
    }
    , {teamID: 4, teamName: 'Manchester City'
    }
    , {teamID: 5, teamName: 'Tottenham'
    }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    var teamString= JSON.stringify(teams);
    var fs=require('fs');
    fs.writeFile("team.json", teamString, (error) => { "boom"});
    var liverpoolString= JSON.stringify(liverpoolPlayers);
    fs.writeFile("liverpool.json", liverpoolString, (error) => { "boom"});
    var chelseaString= JSON.stringify(chelseaPlayers);
    fs.writeFile("chelsea.json", chelseaString, (error) => { "boom"});
    var manuString= JSON.stringify(manuPlayers);
    fs.writeFile("manu.json", manuString, (error) => { "boom"});
    var mancityString= JSON.stringify(mancityPlayers);
    fs.writeFile("mancity.json", mancityString, (error) => { "boom"});
    var tottenhamString= JSON.stringify(tottenhamPlayers);
    fs.writeFile("tottenham.json", tottenhamString, (error) => { "boom"});
    res.send(teams);
});
router.get('/:teamName', function(req, res, next) {

    var requestedTeam = req.params['teamName'];
    let team = teams.find(o => o.teamName === requestedTeam);
    res.send(team);
});
router.get('/:teamName/:playerID', function(req, res, next) {
    const requestedPlayer= parseInt(req.params['playerID']);
    const requestedTeam= req.params['teamName'];
    let team = teams.find(o => o.teamName === requestedTeam);
    let player = team.players.find(p => p.playerID === requestedPlayer);
    res.send(player);
});
router.put('/:teamID', function (req, res)  {
    let player=req.body;
    console.log('player= '+player.playerName+' player id is '+player.playerID);
    const requestedTeam= parseInt(req.params['teamID']);
    console.log('player team= '+requestedTeam);
    for(const i in teams) {
        if(teams[i].teamID==requestedTeam){
            console.log('i found the team');
            for(const j in teams[i].players) {
                console.log('the id in the array is '+teams[i].players[j].playerID);
                if (teams[i].players[j].playerID == player.playerID) {
                    console.log('i found the player');
                    teams[i].players[j] = player;
                    break;
                }
            }
        }
    }
    res.status(200).send(player);
})
router.delete('/:teamID', function (req, res) {
    let team=null;
    const requestedTeam= parseInt(req.params['teamID']);
    for(const i in teams){
        if (teams[i].teamID== requestedTeam){
            team=teams[i];
            teams.splice(i,1);
            break;
        }
    }
    res.send(200, team);
})
router.delete('/:teamID/:playerID', function(req, res)
{

    const requestedTeam = parseInt(req.params['teamID']);
    const requestedPlayer = parseInt(req.params['playerID']);
    console.log('team id is '+requestedTeam+' player id is '+requestedPlayer);
    for (const i in teams) {
        if (teams[i].teamID == requestedTeam) {
            console.log('i found the team');
            for (const j in teams[i].players) {
                if (teams[i].players[j].playerID == requestedPlayer) {
                    console.log('i found the player');
                    teams[i].players.splice(j, 1);
                }
                break;
            }
            break;
        }

    }
    console.log('sending status');
    res.sendStatus(200);
})
router.post('/:teamID', function(req, res){
    let player=req.body;

    const requestedTeam= parseInt(req.params['teamID']);

    for(const i in teams){
        if(teams[i].teamID == requestedTeam){
            console.log('i found the team');
            let maxId = Math.max.apply(Math, teams[i].players.map(function(o) { return o.playerID; }));
            maxId=maxId+1;
            console.log('the id is '+maxId);
            player.playerID=maxId;
            teams[i].players.push(player);
            console.log('the player has been added with id '+player.playerID);
        }
    }
    console.log('player to send is '+player.playerID+' the name is '+player.playerName);
    res.status(200).send(player);
})
module.exports = router;