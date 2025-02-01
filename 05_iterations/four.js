// for each

const arr = ["js", "ruby", "python", "java", "cpp"]

/*

arr.forEach(function (value){
    console.log(value);
})
arr.forEach((value) => {
    console.log(value);
})
const language = function (value){
    console.log(value);
}
arr.forEach(language)

*/

arr.forEach((value,index,array) => {
    console.log(value,index,array);
})


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((value) => {
    console.log(value.languageName);
})