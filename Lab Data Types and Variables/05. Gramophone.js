function solve(bandName, albumName, song) {
  let songDuration = (albumName.length * bandName.length * song.length) / 2;

  let rotateTimes = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotateTimes} times.`);
}
solve("Black Sabbath", "Paranoid", "War Pigs");
