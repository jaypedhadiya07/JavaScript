// Singleton Objects
// const YoutubeUser = new Object()
// console.log(YoutubeUser) // {}
// Non-Singleton Objects
const YoutubeUser = {}
console.log(YoutubeUser); // {}
YoutubeUser.UserId = "123abc"
YoutubeUser.Name = "vishu"
YoutubeUser.LastLoggedInDay = "Monday"
console.log(YoutubeUser);

const TinderUser = {
    UserId: "020abc",
    Name: {
        FullName: {
            FristName: "jay",
            LastName: "pedhadiya"
        }
    }
}
console.log(TinderUser.Name); //  FullName: { FristName: 'jay', LastName: 'pedhadiya' } }
console.log(TinderUser.Name.FullName); // { FristName: 'jay', LastName: 'pedhadiya' }
console.log(TinderUser.Name.FullName.FristName); // jay

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const AllObj = Object.assign(obj1,obj2,obj3)
// console.log(AllObj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const AllObj = Object.assign({},obj1,obj2,obj3)
// console.log(AllObj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1); // { '1': 'a', '2': 'b' }

const AllObj = { ...obj1, ...obj2, ...obj3 }
console.log(AllObj); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(YoutubeUser);
console.log(Object.keys(YoutubeUser));
console.log(Object.values(YoutubeUser));
console.log(Object.entries(YoutubeUser));

const apidata = [
    {
        Name: "yash",
        Age: 72
    },
    {
        Name: "yash",
        Age: 72
    },
    {
        Name: "yash",
        Age: 72
    }
]
console.log(apidata[0].Name);
console.log(YoutubeUser.hasOwnProperty("Name"));