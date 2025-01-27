const Marvel_Heros = ["IronMen", "Thor", "Loki"]
const Dc_Heros = ["Supermen", "Flesh", "Betamen"]
console.log(Marvel_Heros);
console.log(Dc_Heros);

// Marvel_Heros.push(Dc_Heros);
// console.log(Marvel_Heros); // [ 'IronMen', 'Thor', 'Loki', [ 'Supermen', 'Flesh', 'Betamen' ] ]

// console.log(Marvel_Heros[3][2]);

const All_heros = Marvel_Heros.concat(Dc_Heros)
console.log(All_heros);
console.log(Marvel_Heros); // No Change In Array

const SecondWay_All_Heros = [...All_heros,...Dc_Heros] //spread operator
console.log(SecondWay_All_Heros);

const con_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]
console.log(con_Array.flat(Infinity));
console.log(con_Array); //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, 10, [ 11, 12 ] ] ]

console.log(Array.isArray("jay"));
console.log(Array.from("jay"));
console.log(Array.from({name: "jay"}));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));