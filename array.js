//ROTATE THE NUMBER
/*var students3 = [0,1,2,3,4,5,6,7,8,9,10];
console.log("Before");
console.log(students3);
function rotateLeft(x) 
{
    let second = x.shift();  // Remove first element
    x.push(second);          // Add it to the end
    return x;
}
console.log("After");
console.log(rotateLeft(students3));*/

//ROTATE THE NUMBER +2//
/*var students4 = [0,1,2,3,4,5,6,7,8,9,10];
console.log("Before:");
console.log(students4);
function rotateLeft(y)
{
    let z = y.shift();
    let t = y.shift();
    y.push(z);
    y.push(t);
    return y;

}
console.log("After");
console.log(rotateLeft(students4));*/


//DISPLAY EVEN OR ODD NUMBER FROM AN ARRAY//
/*var students5 = [0,1,2,3,4,5,6,7,8,9,10];
console.log("Orginal Array", students5);
//function to filter even number//
let EvenNumber = students5.filter(num => num % 2 == 0 );
console.log("Even Number In The Array:", EvenNumber);
let OddNumber = students5.filter(num => num % 2 !==0 );
console.log("Odd Number In The Array:", OddNumber);
console.log("New Array", students5);*/

//ACCESS THE ARRAY BASED ON THE USER INPUT//
/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

rl.question("Enter indexes (comma-separated): ", input => {
    const selectedValues = input.split(",")
        .map(i => students6[Number(i)])
        .filter(v => v !== undefined);
    console.log("Selected values:", selectedValues);
});*/




/*ARRAY OPERATION THAT NEEDS TO BE DONE
📌 1. Basic Array Operations
✅ Creating an array → let arr = [1, 2, 3];
✅ Accessing elements → arr[0] // First element
✅ Modifying elements → arr[1] = 100;
✅ Finding array length → arr.length*/
/*📌 2. Adding & Removing Elements
✅ push() → Add to the end
✅ pop() → Remove from the end
✅ unshift() → Add to the beginning
✅ shift() → Remove from the beginning
📌 3. Looping Through Arrays
✅ for loop → Standard loop
✅ forEach() → Iterate over elements
✅ map() → Create a new array
📌 4. Searching & Filtering
✅ indexOf() → Find index of an element
✅ includes() → Check if an element exists
✅ filter() → Get elements that match a condition
✅ find() → Get the first element that matches a condition
📌 5. Sorting & Reversing
✅ sort() → Sort an array (default is ascending)
✅ reverse() → Reverse the order of elements
📌 6. Joining & Splitting
✅ join() → Convert an array to a string
✅ split() → Convert a string into an array
📌 7. Slicing & Splicing
✅ slice(start, end) → Extract a part of the array (does not modify original)
✅ splice(start, count, newItems...) → Remove/replace items in an array
📌 8. Merging & Copying
✅ concat() → Merge arrays
✅ spread operator (...) → Copy or merge arrays
📌 9. Advanced Array Methods
✅ reduce() → Perform calculations on arrays
✅ some() → Check if at least one element matches a condition
✅ every() → Check if all elements match a condition
📌 10. Multidimensional Arrays (Nested Arrays)
✅ Arrays inside arrays (useful for grids, tables, etc.)
📌 11. Data Swapping Array
✅Swap Entire Arrays	[arr1, arr2] = [arr2, arr1];
✅Swap All Elements One by One	for (let i = 0; i < arr1.length; i++)
✅Swap Even Index Elements	for (let i = 0; i < arr1.length; i += 2)
✅Swap Based on Condition	if (arr1[i] % 2 === 0)
✅Swap in Reverse Order	[arr1[i], arr2[arr2.length - 1 - i]] = [...]*/