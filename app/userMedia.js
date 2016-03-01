module.exports = new Promise(function(resolve, reject){
  if( navigator.webkitGetUserMedia ){
    navigator.webkitGetUserMedia({video:true, audio: true}, resolve, function(error){
      alert('you got no WebRTC webcam');
    });
  }else if(navigator.mozGetUserMedia){
    navigator.mozGetUserMedia({video:true, audio: true}, resolve, function(error){
      alert('you got no WebRTC webcam');
    });
  }else console.assert(false);
});
