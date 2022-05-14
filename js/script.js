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

// module2  22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for(let i = min; i <= max; i+=1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// module2 23
// function filterArray(numbers, value) {
//   let number = [];
//   // ----- first variant -------
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (i > value) {
//       number.push(i)
//     }
//   }
//   // ------ second variant -------
//   // for (let k of numbers) {
//   //   if (k > value) {
//   //     number.push(k)
//   //   }
//   // }
//   return number;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ========== LESSON WITH A MENTOR ==========
// const products = [ {
//     id : 'sku1',
//     qty: 1,
// }, {
//     id : 'sku2',
//     qty: 2,
// }, {
//     id : 'sku3',
//     qty: 3,
// }, {
//     id : 'sku1',
//     qty: 6,
// }, {
//     id : 'sku1',
//     qty: 8,
// }, {
//     id : 'sku2',
//     qty: 19,
// }, {
//     id : 'sku4',
//     qty: 1,
// }]
//Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
//(Потрібно мутувати даний масив, створювати новий не потрібно)

// module2 25
// function getCommonElements(array1, array2) {
//   const newArray = [];
//   // for (let i of array1) {
//   //   if (array2.includes(i)) {
//   //     newArray.push(i);
//   //   }
//   // }
//   for (let i = 0; i <= array1.length; i += 1){
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([6, 7, 8], [3, 5, 9]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i of order) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  
//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// module2 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const numbers = [];
//   const newArray = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(2, 20));

// function includes(array, value) {
//   // 1st variant

//   for(let i of array){
//     if(i === value) {
//       return true;
//     } 
//   }
//   return false;
//   // 2nd variant

//   // for (let j = 0; j <= array.length; j++) {
//   //   if (array[j] === value) {
//   //     return true;
//   //   }
//   // }
//   // return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))

// const apartment = {
//     tags: ["premium", "promoted", "top"],
// };
// const lastTag = apartment.tags.pop();

// console.log(lastTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };
// console.log(credentials);
// emailInputName = prompt("input your email");
// passwordInputName = prompt("input your password");

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     console.log(keys);
    
//     values.push(apartment[key]);
//     console.log(values);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
    
//     const properties = [];
    
//   for (const key in object){
//     if (object.hasOwnProperty(key)){
//       properties.push(key);
//     }
//     propCount = properties.length;
//   }
//   // Change code above this line
//     return propCount;
//     // return properties;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     // console.log(keys.push(key));
//     values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

// const book = {
//   title: "The Last Kingdom",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// // console.log(keys);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// function countPropsEx(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countPropsEx({ name: "Mango", age: 2 }));

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//     const properties = [];
//     const keys = Object.keys(object);
//     // propCount = properties.length;
//     for (const key of keys) {
//         properties.push(object[key])
//     }
//     propCount = properties.length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({mail: "poly@mail.com", isOnline: true, score: 500 }))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys)
// console.log(values)

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const total = Object.values(salaries);
//     for (const key of total) {
//         totalSalary += key;
//     }
//     return totalSalary;
    
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//     for (const key of products) {
//         if (key.name === productName) {
//             return key.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Mia"));

// #19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const values = [];
//     for (const key of products) {
//         if (key[propName]) {
//             values.push(key[propName]);
//         }
//     }
//     return values;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Mia"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;

// // const yesterday = $yesterday;
// // const today = today;
// // const tomorrow = tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log()

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     // const {
//     //     text,
//     //     category,
//     //     priority,
//     //     completed,
//     // } = data;
//     const newData = {completed, category, priority, ...data}
//     return newData;
//     console.log(data);
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// console.log(makeTask({ category: "Finance", text: "Take interest" }))

// #31
// function add(...args) {
//     let summ = 0;
//     for (let argument = 0; argument < args.length; argument += 1){
//       summ += args[argument];
//     }
//     return summ;
//   // Change code above this line
// }
// console.log(add(15, 27));

// #32
// function addOverNum(givenNumber, ...args) {
//   let total = 0;
//     // const maxNumber = Math.max(args);
//     for (const arg of args) {
//         if (arg > givenNumber) {
//           total += arg;
//         }
//     }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))
// console.log(addOverNum(15, 32, 6, 13, 19, 8))
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))

// #33
// function findMatches(args, ...numbers) {
//   const matches = []; // Don't change this line
//     for (const number of numbers) {
//         if (args.includes(number)) {
//             matches.push(number);
//         }
//     }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// #34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));

// #35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//   const bookIndex = this.books.indexOf(oldName);
//   this.books.splice(bookIndex, 1, newName);
  
//       return this.books;
//     //   return bookIndex;

//     // Change code above this line
//     },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// #36
// const atTheOldToad = {
//     potions: [],
// };
// console.log(atTheOldToad.potions)

// #37
// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return this.potions;
//     },
// };
// console.log(atTheOldToad.potions)

// #38
// const atTheOldToad = {
//  potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//       this.potions.push(potionName);
//       return this.potions;
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"))

// #39
// const atTheOldToad = {
//  potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);
//       return this.potions;
//         // return potionIndex;
//     },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"))

// #40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// #41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const item = this.potions[i];
//             if(item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             } 
//         }
//         this.potions.push(newPotion);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const item = this.potions[i];
//             const potionIndex = this.potions.indexOf(item);
//             if (item.name === potionName) {
//                   this.potions.splice(potionIndex, 1);
//                 return this.potions;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//   updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const item = this.potions[i];
//             if (item.name === oldName) {
//                 item.name = newName;  
//                 return this.potions;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// console.log(this.potionIndex)

// #3
// function makePizza(pizzaName, callback) {
//  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });

// #4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         for (let i = 0; i < this.pizzas.length; i += 1){
//             if (pizzaName === this.pizzas[i])
//             {
//                 onSuccess(pizzaName);
//                 return makePizza(pizzaName);
//             }
//         }
//         onError(pizzaName);
//         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// #5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//   })
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// #6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// #7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         };
//     });
//   return commonElements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// #13
// const changeEven = (numbers, value) => {
//     newNumbers = [];
//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             newNumbers.push(number + value);
//         } else {
//              newNumbers.push(number);
//         }
//     });
//     return newNumbers;
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// #15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// #24
// const getUsersWithFriend = (users, friendName) => {
//    const userFriend = users.filter(friend => friend.friends.includes(friendName));
//    return userFriend;
// };

// console.log(getUsersWithFriend(users, "Briana Decker"));

// #25
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     const uniqueUsersFriends = allFriends.filter(
//         (friend, index) => allFriends.indexOf(friend) === index);
//    return uniqueUsersFriends;
// };
// console.log(getFriends(users));

// #26
// const getActiveUsers = (users) => {
//     const activeUsers = users.filter(user => user.isActive === true);
//     return activeUsers;
// };
// console.log(getActiveUsers(users));

// #35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     // const time = ;
//     return total + player.playtime/player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// #36
// const calculateTotalBalance = users => {
//     const totalBalance = users.reduce((total, user) => {
//         return total + user.balance;
//     }, 0);
//     return totalBalance;
// };
// console.log(calculateTotalBalance(users));

// #37
// const getTotalFriendCount = users => {
//     const allFriends = users.reduce((total, user) => {
//        return total + user.friends.length;
//    }, 0);
//    return allFriends;
// };
// console.log(getTotalFriendCount(users));

// #40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// #41 example
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAscendingScoreOrder)
// console.log(inDescendingScoreOrder)
// console.log(inAlphabeticalOrder)

// #41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//     secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//     firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//     secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)

// #42
// const sortByAscendingBalance = users => {
//     const sortedBalance = [...users].sort((firstUser, secondUser) => 
//         firstUser.balance - secondUser.balance);
//     return sortedBalance;
// };
// console.table(sortByAscendingBalance(users));

// #43
// const sortByDescendingFriendCount = users => {
//     const amountOfFriends = [...users].sort((firstUser, lastUser) =>
//         lastUser.friends.length - firstUser.friends.length);
//    return amountOfFriends;
// };

// console.log(sortByDescendingFriendCount(users));

// #46
// const getNamesSortedByFriendCount = users => {
//     const namesList = [...users]
//         .sort((oneFriend, manyFriends) => oneFriend.friends.length - manyFriends.friends.length)
//         .map(user => user.name);

//     return namesList;
// };
// console.log(getNamesSortedByFriendCount(users));

// #47
// const getSortedFriends = users => {
//     const friendsList = [...users]
//         .flatMap(user => user.friends)
//         .filter((course, index, array) => array.indexOf(course) === index)
//         .sort((firstName, lastName) => firstName.localeCompare(lastName));
//     return friendsList;
// };
// console.log(getSortedFriends(users));

// #48
// const getTotalBalanceByGender = (users, gender) => {
//     const userBalance = [...users]
//         .filter(user => user.gender === gender)
//         .reduce((total, user) =>
//         { return total + user.balance }, 0);
//     return userBalance;
// };
// console.log(getTotalBalanceByGender(users, "female"));
// console.log(getTotalBalanceByGender(users, "male"));

