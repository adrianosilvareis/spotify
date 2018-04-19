'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylist = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* eslint no-undef: "off", curly: "error" */
var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_utils.toJSON);
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylist = exports.searchPlaylist = function searchPlaylist(query) {
  return search(query, 'playlist');
};