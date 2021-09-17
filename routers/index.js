const express = require("express");
const router = express.Router();
const SongRouter = require("./songs.router");
const API_SONGS = `/songs`;

router.use(API_SONGS, SongRouter);

module.exports = router;
