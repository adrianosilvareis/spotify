'use strict';

var _search = require('./search');

var _albuns = require('./albuns');

module.exports = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchTracks: _search.searchTracks,
  searchPlaylist: _search.searchPlaylist,
  getAlbum: _albuns.getAlbum,
  getAlbums: _albuns.getAlbums,
  getAlbumTracks: _albuns.getAlbumTracks
};