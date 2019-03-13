const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");


// Matches with "/api/games"
router.route("/")
    .get(gamesController.findAll)
    .post(gamesController.create);
  //

  router.route("/future")
    .get(gamesController.findFuture);
// Matches with "/api/games/:id" can delete 
  router.route("/:id")
    .get(gamesController.findById)
    .delete(gamesController.remove)
    .put(gamesController.update);
  

  
  

module.exports = router;
