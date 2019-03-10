function bottleSong() {
	// Write your code here!
	let numBottles = 99
  for(i = 99; i >=1; i--) {
    numBottles--
    if(i === 1){
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
      console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
      console.log('No more bottles of beer on the wall, no more bottles of beer.')
      console.log('Go to the store and buy some more, 99 bottles of beer on the wall.')
    } else {
      if (i > 2) {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        console.log(`Take one down and pass it around, ${numBottles} bottles of beer on the wall.`)
      } else {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        console.log(`Take one down and pass it around, ${numBottles} bottle of beer on the wall.`)
      }
    }
  }

};

bottleSong();
