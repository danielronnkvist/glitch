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
  analyser.smoothingTimeConstant = 0.5;

  mediaStream.connect(filter);
  filter.connect(analyser);
}

userMedia.then(handleStream);

function analysis() {
  var bufferLength = analyser.frequencyBinCount;
  var buffer = new Float32Array(bufferLength);
  analyser.getFloatFrequencyData(buffer);

  //find the frequency with largest peak
  var max_index = 0;
  for(var i = 1; i < bufferLength; i++)
  {
    if((buffer[i]) > (buffer[max_index]))
      max_index = i;
  }

  //take the mean value of all the frequencies over the threshold
  var threshold = 5;
  var peaks = [];
  for(var i = 0; i < bufferLength; i++)
  {
    if(buffer[i] > (buffer[max_index]-threshold))
      peaks.push(i);
  }

  //take the sum and devide by mean
  var sum = 0;
  for(var i = 0; i < peaks.length; i++)
  {
    sum += peaks[i];
  }
  var freq = sum / peaks.length;

  //samples from 0-20000 Hz, multiply by 19.5 to get the right frequency
  var result = (freq*19.5)*2;
  console.log(result);

  return result;
}

module.exports = {
  analysis
}
