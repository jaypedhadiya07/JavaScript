let Name = "jay"
let Repo = 1
// console.log("My Name Is " + Name + " And My Repo Is " + Repo); thos is not good hibit

// console.log(`my name is ${Name} and my repo is ${Repo}`);

let GameName = String('jaypatel')
console.log(GameName.__proto__);

console.log(GameName.toUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf(`y`));

const NewString = GameName.substring(0,3) // 0,1,2,3 ==> lenth is 4 but not include 4 
console.log(NewString);

let AnotherString = GameName.slice(0,3)
console.log(AnotherString);

let AnotherSecondString = GameName.slice(-7,3) //not include 3 count only 2
console.log(AnotherSecondString);

let newStringOne = '    jay   '
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "jay_youtube.com//video//%20//.com"

console.log(url.replace('%20','-'));
console.log(url.includes('jay'));

let split = 'jay_patel_07'
console.log(split.split('_'));