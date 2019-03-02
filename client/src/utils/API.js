

import axios from "axios";

export default {
  // Gets all books
  getGames: function() {
    return axios.get("/api/games");
  },
  // Gets the game with the given id
  getGame: function(id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the game with the given id
  deleteGame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  saveGame: function(bookData) {
    return axios.post("/api/games", bookData);
  }
};
