const analyzeArray = function(array) {
    let result = {};
    let highest = 0;
    let lowest = array[0];
    let total = 0;
    for (number of array) {
        if(number > highest) {
            highest = number;
        }
        if(number < lowest) {
            lowest = number;
        }
        total += number;
    }

    result.max = highest;
    result.min = lowest;
    result.length = array.length;
    result.average = total / array.length; 
    
    
    return result;
}

module.exports = analyzeArray;