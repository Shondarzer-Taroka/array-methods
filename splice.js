
const arr=[1,2,3,45,6,7,47]

const addingItems= arr.splice(3, 1, "a", "b", "c");
const newArr=arr.splice(0,3)
console.log(newArr);


console.log(addingItems);
console.log(arr);



// 👉 So basically, splice does two things:
// Removes items from the array
// Inserts new items at that same position
// Returns the removed items