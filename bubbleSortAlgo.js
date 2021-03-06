//log the times 
let arrayLength = []
let sortTime = []

function bubbleSort(a) {
    var swapped;
    do {
    	swapped = false;
    	for (var i=0; i < a.length-1; i++) {
        	if (a[i] > a[i+1]) {
            	var temp = a[i];
            	a[i] = a[i+1];
            	a[i+1] = temp;
            	swapped = true;
        	}
    	}
    } while (swapped);
}
 
//var ary = [34, 203, 3, 746, 200, 984, 198, 764, 9] replaced by random array

//generate array with given length and given upper bound, starts from 0)
function getArray(length, upBound){
    let array = []
    for (var i = 0; i < length; i++)
        array.push((Math.floor(Math.random()*upBound)))
    return array
}

//var ary = getArray(10, 100)

//start timer
//let startTime = new Date()
//bubbleSort(ary);
//end timer
//let endTime = new Date()
//console.log('Runtime )msec: ', endTime - startTime)
//console.log(ary);

let maxLen  = 1000000 //the max length of the tested arrays

for (var i = 500000; i < maxLen+1 ; i+= 400000){
    
    var ary = getArray(i, maxLen)
    console.log('Generated array of length ', i)
    let startTime = new Date()
    bubbleSort(ary)
    let endTime = new Date()

    arrayLength.push(i)
    sortTime.push(endTime - startTime)
    console.log('runtime was: ', endTime - startTime)
}

console.log(arrayLength)
console.log(sortTime)