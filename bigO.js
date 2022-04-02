const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 
'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array){
    // Check for the time taken to perform the loop, or the performance
    let t0 = performance.now(); //Code runs before the loop
    for(let i=0; i<array.length; i++){
        if(array[i] === 'nemo'){
            console.log('FOUND NEMO');           
        }
    }
    let t1 = performance.now(); //Code runs after the loop
    console.log('Call to find Nemo took ' + (t1-t0)
    + ' milliseconds');
}

findNemo(large);