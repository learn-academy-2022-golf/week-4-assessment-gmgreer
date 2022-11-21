// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("mixIt", ()=>{
    it("Function that takes in an array, removes the first item from the array and shuffles the remaining content.", ()=>{
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        output1 = ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        output2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(mixIt(colors1)).toEqual(expect.arrayContaining(output1))
        expect(mixIt(colors1)[0]).not.toEqual("yellow")
        expect(mixIt(colors2)).toEqual(expect.arrayContaining(output2))
        expect(mixIt(colors2)[0]).not.toEqual("saffron")
    })
})

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.
// The function takes in an array
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
const mixIt = (array) => {
    // we use the slice accessor method to remove the first element in the array. Array.slice will start the array at the given index and continue until the index of the second given argument. If no second argument is given it will continue till the end of the array.
   let newArr = array.slice(1)
   // creating the condition to count down so the while loop stops.
   let index = newArr.length
   // initializing a variable to hold a random number
   let random
   // the while loop will continue until the index = 0, since 0 is falsy we don't need to actually put the != part
   while (index) {
    // setting the random number so that it can never be greater than the length of the array and will ensure that every element of the array has a chance to be picked and also decrements the length so that our loop will end.
    random = Math.floor(Math.random()*index--)
    // swapping the values at the random and current index, this is the swapping part. Takes that random index which is guaranteed to be an index in the array then swaps with the index currently being passed in. Because one number is random based on the current index and the other is a decrementing index you are guaranteed to shuffle every item in the array. The values are placed inside an array so the return will be an array.
    [newArr[index], newArr[random]] = [newArr[random], newArr[index]]
   }
   // return newArr so that we do not mutate the original and also can get the sliced part.
   return newArr
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tally", ()=> {
    it("Function that takes in an object that contains up votes and down votes and returns the end tally.", ()=> {
        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31
        expect(tally(votes1)).toEqual(11)
        expect(tally(votes2)).toEqual(-31)
    })
})

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.
//create a function that takes an object as an argument
const tally = (obj) => {
    //subtract the downvotes from the upvotes. A positive number means the upvotes won and a negative number means the downvotes won.
    return obj.upVotes - obj.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineArgs", ()=> {
    it("function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", ()=>{

        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        output1 = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        const dataArray3 = ["object", "integer", "float", "double", "symbol", "null", "array"]
        output2 = ["array", "object", "number", "string", "Boolean", "null", "undefined", "integer", "float", "double", "symbol"]
        expect(combineArgs(dataArray1, dataArray2)).toEqual(output1)
        expect(combineArgs(dataArray1,dataArray2,dataArray3))
    })
})

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total



// b) Create the function that makes the test pass.
// function that takes in any number of arrays as arguments, tested with at least three above
const combineArgs = (...arg) => {
    // return the answer ha. so a Set is an object with no duplicate values, you can pass in an array or any values and you will get an object with unique values. You can use the Array.from method to create an array from a set but I just used the spread operator to destructure the set and placed it inside of an array. I used the .flat because the rest operator used to pull in any number of arguments places all of the arguments into an array which you can then access iteratively. Instead of doing that and concatting them together through a loop i used the built in flat() method which just takes an array with any number of nested arrays and pulls all of their values to a single array concatting them together like magic.
    return [...new Set(arg.flat())]
}
