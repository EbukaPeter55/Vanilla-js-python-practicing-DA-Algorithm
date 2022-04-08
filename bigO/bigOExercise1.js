// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //0(1)
    a = 50 + 3; //0(1)
  
    for (let i = 0; i < input.length; i++) { //0(n) loops are always linear time
      anotherFunction(); //0(n) Because the number of times it is called, depends on the number of times the input supplied runs.
      let stranger = true; //0(n)
      a++; //0(n)
    }
    return a; //0(1) return runs once
  }

//   1 + 1 + 1 = 3
//   n + n + n + n = 4n
// BIG 0(3 + 4n)