var playlist = {key: 'value'}

function updatePlaylist(object,key,value) {
  object[key] = value;
  return object;
}

function removeFromPlaylist(object,key) {
   return delete object.key;
}