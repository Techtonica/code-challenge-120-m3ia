// Since you all have been reading about functional programming,
// let's create some useful functional-style JS.
//
// You have an array and you want to group it by some logic.
// In the \_functional\_ style you define that logic using a function
// and use it as an argument.
//
//
//
// ```
//
// // Let's say you want to group your pomeranians by weight class.
pomeranians = [
  { name: 'Osito', weight_kg: 3.5 },
  { name: 'Maní', weight_kg: 3.9 },
  { name: 'Bella', weight_kg: 7.2 }
]
// groupBy(pomeranians, (p) => Math.floor(p.weight_kg))
// /*
//  {
//   '3': [
//         { name: 'Osito', weight_kg: 3.5 },
//         { name: 'Maní', weight_kg: 3.9 }
//       ],
//   '7': [{ name: 'Bella', weight_kg: 7.2 }]
//  }
// */
//
//  // or string by their length
// groupBy(['one', 'two', 'three'], (s) => s.length);
// // => { '3': ['one', 'two'], '5': ['three'] }
//
// ```
//
//
//
// Implement groupBy. Use other existing functions on Array if you want.
//

// function groupBy(arr, logic){
//   return(

//     );
// }


function groupBy (arr, logic) {
  // create object that we will return from
const returnObj = {};
  // iterate over array 
  for( let item of arr) {
  //     for each item in array - use the logic function (call the function)
    let key = logic(item);
    // console.log("item: ", item, "key: ", key);
  //     for each item in array, push something into our return object

  //     create key/value pair for the return object with an empty array 
    if (!returnObj[key]) {
      // console.log("This is a new key");
      returnObj[key] = [];
    } else {
      // console.log("Key already exists" + returnObj[key]);
    }
  //     for each item in array: push item into the correct output array
    returnObj[key].push(item);
    
    // console.log("returnObj is now ", returnObj);

}
  // return the object!
  return returnObj;
}

// trial line
// console.log(groupBy(pomeranians, (p) => Math.floor(p.weight_kg)));


/* sandbox */
// function callFunction(input, logic) {
//   return logic(input);
// }

// function floor(input) {
//   return Math.floor(input);
// }

// function double(input) {
//   return input * 2;
// }

// function captureWeight (arr) {
//   let wtBox = [];
//   for (let i=0; i<arr.length; i++) { 
//     if (!wtBox.includes(Math.floor(arr[i].weight_kg))) {
//       wtBox.push(Math.floor(arr[i].weight_kg));
//     }
//   }
//   return wtBox;
// }

// console.log(captureWeight(pomeranians));

// console.log(callFunction(3.5, floor));

// console.log(callFunction(3.5, double)); 


module.exports = groupBy;
