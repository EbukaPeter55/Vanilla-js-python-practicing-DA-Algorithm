// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 
// 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(10000).fill('nemo');

// function findNemo(array){
//     // Check for the time taken to perform the loop, or the performance
//     for(let i=0; i<array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('FOUND NEMO');           
//         }
//     }
// }

// findNemo(large);//o(n) --> LINEAR TIME. Number of operations increases as the number of elemtents in the graph increases. Fair in the graph
const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(1)
}
logFirstTwoBoxes(boxes); //0(2) constant time: It is excellent in the graph
// CONSTANT TIME-flat line on the graph. Basically only brings out one element from an Array, The number of operations
// doesn't increase as the number of elements increases