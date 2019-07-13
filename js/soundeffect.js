function enableAutoplay(sound) { 
  sound.autoplay = true;
  sound.load();
  sound.preload = "metadata";
}

function enableLoop(sound) {
  sound.autoplay = true;
  sound.loop = true;
  sound.load();
} 

