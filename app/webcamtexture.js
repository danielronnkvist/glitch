import { Texture } from 'three';
const userMedia = require('./userMedia.js');

var WebcamTexture = function(){
  console.assert(WebcamTexture.available === true)
  // create the video element
  var video = document.createElement('video');
  video.width = 320;
  video.height  = 240;
  video.autoplay  = true;
  video.loop  = true;
  // expose video as this.video
  this.video  = video;

  userMedia.then(function(stream){
    video.src = URL.createObjectURL(stream);
  });

  // create the texture
  var texture = new Texture( video );
  // expose texture as this.texture
  this.texture = texture;

  /**
   * update the object
   */
  this.update = function(delta, now){
    if( video.readyState !== video.HAVE_ENOUGH_DATA ) return;
    texture.needsUpdate = true;
  }

  /**
   * destroy the object
   */
  this.destroy  = function(){
    video.pause();
  }
}


WebcamTexture.available  = navigator.webkitGetUserMedia || navigator.mozGetUserMedia ? true : false;

module.exports = WebcamTexture;
