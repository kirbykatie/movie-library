
function arrShuffle(array) {
	let shuffedArray = array;
	let currentIndex = shuffedArray.length, temporaryValue, randomIndex;
	
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffedArray[currentIndex];
    shuffedArray[currentIndex] = shuffedArray[randomIndex];
    shuffedArray[randomIndex] = temporaryValue;
  }
  return shuffedArray;
}

export { arrShuffle }