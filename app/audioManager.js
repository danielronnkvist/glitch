const userMedia = require('./userMedia.js');

let audioContext = new AudioContext();
let analyser;

function handleStream(stream) {
  var mediaStream = audioContext.createMediaStreamSource(stream);

  // Create analyser
  var filter = audioContext.createBiquadFilter();
  filter.type = filter.bandpass;
  filter.frequency.value = 3937.5;
  filter.Q.value = 0.5;

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0;

  mediaStream.connect(filter);
  filter.connect(analyser);
}

userMedia.then(handleStream);

function analysis() {
  if(!analyser) return 0;
  var bufferLength = analyser.frequencyBinCount;
  var floatBuffer = new Float32Array(bufferLength);
  analyser.getFloatFrequencyData(floatBuffer);
  var byteBuffer = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(byteBuffer);

  //find the frequency with largest peak
  var max_index = 0;
  for(var i = 1; i < bufferLength; i++)
  {
    if(floatBuffer[i] > floatBuffer[max_index])
      max_index = i;
  }

  //take the mean value of all the frequencies over the threshold
  var threshold = 15;
  var peaks = [];
  for(var i = 0; i < bufferLength; i++)
  {
    if(floatBuffer[i] > (floatBuffer[max_index]-threshold) && floatBuffer[i] > -30)
      peaks.push(i);
  }

  //take the sum and divide by mean
  var sum = peaks.reduce((a, b)=> a + b, 0);
  var freq = sum / peaks.length;

  let ampSum = byteBuffer.reduce((a, b) => a + b, 0);
  let amp =  ampSum / byteBuffer.length;

  return {
    freq,
    amp,
  };
}

module.exports = {
  analysis
}
