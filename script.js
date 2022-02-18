// let number;
// number = 100;
// console.log (number);

// function main(ordered, available) {
//     let message;
//     if (ordered > available) {
//         message = `Not enough goods in stock!`
//     } else {
//         message = `Your order is processed, our manager wiil contact You soon!`
//     }
//     return message;
// }
// console.log(main(100, 30));

// function checkStorage(available, ordered) {
//     let message;

//     message = ordered > available ? "Not enough goods in stock!" : "Your order processed, our manager will contact you";

//     return message;
// }
// console.log(checkStorage(10, 40));

// function getSubscription(type) {
//     let price;
    // const type1 = "starter";
    // if(type === "starter") {
    //     price = 0;
    // } else if(type === "professional") {
    //     price = 20;
    // } else if(type === "organization") {
    //     price = 50;
    // };


//     switch (type) {
//         case "starter":
//             price = 0;
//             break;

//         case "professional":
//             price = '20';
//             break;

//         case "organization":
//             price = '50';
//             break;

//         default:
//             console.log("Invalid subscription type!")
//     }
//     return price;
// }
// console.log(getSubscription("organization"));

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     switch (country){
//         case 'China':
//             price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Chile':
//             price = 250;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Australia':
//             price = 170;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Jamaica':
//             price = 120;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country";
//     }
//     // Change code above this line
//     return message;
// }
// console.log(getShippingCost('Chile'));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(lastElement)

// function formatMessage(message, maxLength) {
//     let result;
//     switch (message) {

//       case length <= maxLength:
//         result = message;
//         break;

//       case length > maxLength:
//         result = message.slice(message, maxLength) + '...';
//         break;
//     }

//     // if(message.length <= maxLength) {
//     //     result = message;
//     // } else if(message.length > maxLength) {
//     //     result = message.slice(message, maxLength) + '...';
//     // }
//     // return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));


// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   message = message.toLowerCase();
//   // message.toUpperCase();
//   result = message.includes("spam") || message.includes("sale") ? true : false;
//   // if(message.includes("spam")) {
//   //   result = true;
//   // } else  if( message.includes("sale")) {
//   //   result = true;
//   // } else {
//   //   result = false;
//   // }
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("is the Sale"));

// const clients = ["Mango", "Ajax", "Poly"];
// clients[1] = "Alex";
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5

// function getExtremeElements(array) {
//   // const newArray = array.splice(1, array.length - 2);
//   // return array;
  
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   // let words = message.split(" ");
//   // let amount = words.length;
//   // let price =  message.split(" ").length * pricePerWord;
//   return message.split(" ").length * pricePerWord;


//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if(newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   if(newArray.length === maxLength) {
//     return newArray;
//   }
// }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// function calculateTotal(number) {
//   let sum = 0;
//   for(let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(3));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // for(let i = 0; i <= order; i += 1) {
//   //   total += i;
//   // }
//   for(let i of order){
//     total += i;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))


// function findLongestWord(string) {
//   let wordsArray = string.split(' ');
//   let longestWord;
//   let lWLength = 0;
//   for(let i = 0; i < wordsArray.length; i++) {
//     if(wordsArray[i].length > lWLength) {
//       lWLength = wordsArray[i].length;
//       longestWord = wordsArray[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// -------------------------EXAMPLE-------------------------------

// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


function createArrayOfNumbers(min, max) {
  const numbers = [];
  number = numbers.push(min);
  for(let i = min; i <= max; i+=1) {
    number = numbers.push(--i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));