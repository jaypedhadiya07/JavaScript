const arr = ["js", "ruby", "python", "java", "cpp"]

const value = arr.forEach((value) => {
    console.log(value);
    // return value
}) // forEach() always returns undefined
console.log(value); //js, ruby, python, java, cpp, // undefined

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr3 = []
arr2.forEach((value) => {
    if (value > 5) {
        arr3.push(value)
    }
})
console.log(arr3);


// filter 
// const newValue = arr2.filter((value) => value > 5)
// console.log(newValue);

// second way for filter method

const newValue = arr2.filter((value) => {
    return value > 5
})
console.log(newValue);


const Books = [
    {
        title: "book1", genre: "Commedy", publish: 1995, edition: 2000
    },
    {
        title: "book2", genre: "fiction", publish: 2000, edition: 2005
    },
    {
        title: "book3", genre: "maths", publish: 1993, edition: 2001
    },
    {
        title: "book4", genre: "science", publish: 2004, edition: 2020
    },
    {
        title: "book5", genre: "non-fiction", publish: 2008, edition: 2020
    },
    {
        title: "book6", genre: "fiction", publish: 2006, edition: 2022
    },
    {
        title: "book7", genre: "horror", publish: 1995, edition: 2000
    },
    {
        title: "book8", genre: "cartoon", publish: 2012, edition: 2018
    },
    {
        title: "book9", genre: "maths", publish: 2005, edition: 2012
    },
    {
        title: "book10", genre: "story", publish: 2013, edition: 2023
    },
]

let bookinfo = Books.filter((book) => {
    return book.genre === "story" // return key word is also use
})
bookinfo = Books.filter((book) => book.publish > 2000 && book.genre === "maths")
console.log(bookinfo);
