const SongRepository = require("../repositories/song.repository");

/**
 * Song service
 */

const SongService = {
  findAll: async () => {
    return await SongRepository.findAll();
  },
  findById: async (guid) => {
    const song = await SongRepository.findById(guid);
    return song;
  },
  findByArtist: async (auteur) => {
    const songs = await SongRepository.findByArtist(auteur);
    return songs;
  },
  create: async (song) => {
    await SongRepository.create(song);
  },
  update: async (guid, songInfo) => {
    const song = await SongRepository.findById(guid);
    if (!song) {
      throw Error("song not found");
    }
    await SongRepository.update(guid, songInfo);
  },
};

module.exports = SongService;
