var express = require('express');

var router = express.Router();



var TeamController = require('../controller/team.controller');




router.get('/', TeamController.getTeams);

router.get('/:_id', TeamController.getTeam);
router.get('/:_id/:playerID', TeamController.getPlayer);
router.post('/:_id', TeamController.createPlayer);

router.put('/:_id', TeamController.updatePlayer);

//router.delete('/:id',TeamController.removeTodo);
router.delete('/:id/:playerID',TeamController.removePlayer);




module.exports = router;