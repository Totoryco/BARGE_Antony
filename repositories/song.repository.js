const db = require("../models");
const Song = db.songs;
/**
 * Song repository
 */
const SongRepository = {
  findAll: () => {
    return Song.findAll();
  },
  findById: (guid) => {
    const song = Song.findByPk(guid);
    return song;
  },
  findByArtist: (auteur) => {
    const songs = Song.findAll({ where: { auteur: auteur } });
    return songs;
  },
  create: (song) => {
    return Song.create(song);
  },
  update: (guid, song) => {
    return Song.update(song, { where: { guid: guid } });
  },
};

module.exports = SongRepository;
