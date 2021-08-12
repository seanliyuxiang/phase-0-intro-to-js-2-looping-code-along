// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(namesArr, eventName) {
  const messagesArr = [];
  for (let i = 0; i < namesArr.length; i++) {
    messagesArr.push(`Thank you, ${namesArr[i]}, for the wonderful ${eventName} gift!`);
  }

  return messagesArr;
}

function countDown(integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}