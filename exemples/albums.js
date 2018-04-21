/* global fetch */

import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQBAllXYRN1rMobhmQhaTs7sZ9bntH1M6RUEXRC5zD_potL3zEeMGwF__EyFdbfHSTBuOiI2wESQFds0S401HEEyv8r3HYyy_F9Zzkz5yf64J64aCH5upu6Ugy_f65sA9VTBQ4VHX902',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data));
