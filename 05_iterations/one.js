// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


// nested for loop


for (let i = 1; i <= 10; i++) {
        // console.log(`\n\nTable of ${i}\n`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outter loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`); 
    }
}


const arr1 = ["Batman", "Superman", "Hanuman", "Ironman"]
console.log(arr1.length);
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);
}


// break and continue 


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break
    }
    console.log(index);    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Skip");
        continue
    }
    console.log(index);    
}