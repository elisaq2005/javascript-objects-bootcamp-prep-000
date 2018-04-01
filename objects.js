var playlist = {key: 'value'}

function updatePlaylist(object,key,value) {
  object[key] = value;
  return object;
}

function removeFromPlaylist(value,key) {
  return Object.assign({},value,key);
}