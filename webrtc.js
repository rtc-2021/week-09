'use strict';

const pc = new RTCPeerConnection(null);

pc.ondatachannel = function(data) {
  // do something with data-channel `data`
  return data;
};

function ds() {
  // do something
}

pc.addEventListener('datachannel', function(data) {
  // do something with data-channel `data`
  return data;
});
