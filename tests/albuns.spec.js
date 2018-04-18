import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/albuns';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Somoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch  method', () => {
      getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      getAlbum('4aawyAB9vmqN3uQ7FjRGTa');
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTa');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch  method', () => {
      getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      getAlbums(['a', 'b']);
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums?ids=a,b');

      getAlbums(['b', 'a']);
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums?ids=b,a');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch  method', () => {
      getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

      getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTa');
      expect(stubedFetch).to.have.be
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTa/tracks');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
