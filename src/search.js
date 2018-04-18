/* eslint no-undef: "off", curly: "error" */
import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON);

export const searchAlbums = query =>
  search(query, 'album');

export const searchArtists = query =>
  search(query, 'artist');

export const searchTracks = query =>
  search(query, 'track');

export const searchPlaylist = query =>
  search(query, 'playlist');
