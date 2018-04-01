var playlist = {key: 'value'}

function updatePlaylist(object,key,value) {
  object[key] = value;
  return object;
}

function removeFromPlaylist(key,value) {
   delete key.value
   return ;
}