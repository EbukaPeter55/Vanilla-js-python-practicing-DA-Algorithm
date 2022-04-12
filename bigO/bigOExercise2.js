// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //n(1)
    let b = 10; //n(1)
    let c = 50; //n(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //n(0)
      let y = i + 2; //n(0)
      let z = i + 3; //n(0)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //n(0)
      let q = j * 2; //n(0)
    }
    let whoAmI = "I don't know"; //n(1)
  }

    //   is 1+1+1+1 = 4
    // 0+0+0+0+0=5n
  //BIG 0(4 + 5n)
  //



// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//     console.log(items[0]); //n(1) constant time

//     var middleIndex = Math.floor(items.length / 2); //n(1) constant time
//     var index = 0; //n(1) constant time

//     while (index < middleIndex) { //n(0) Linear time
//         console.log(items[index]); //n(1) constant time
//         index++; //n(0)
//     }

//     for (var i = 0; i < 100; i++) { //n(0) Linear time
//         console.log('hi'); //n(1) constant time
//     }
// }
//  1+1+1+1+1 = 5
//  n+n+n = 3n

// Big 0(5 + 3n)