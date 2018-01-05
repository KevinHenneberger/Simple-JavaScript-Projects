function mean(data) {
    
    var sum = 0;

    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    
    return sum / data.length;
}

function median(data) {
    
    data.sort();
   
    var middleIndex = Math.floor(data.length / 2);
    
    if (data.length % 2 == 1) {
        return data[middleIndex];
    } else {
        return (data[middleIndex - 1] + data[middleIndex]) / 2;
    }
}

function mode(data) {
    
    var mode = 0;
    var maxFrequency = 0;

    for (var i = 0; i < data.length; i++) {
        
        var currentFrequency = 0;
        
        for (var j = 0; j < data.length; j++) {
            
            if (data[i] == data[j]) {
                currentFrequency++;
            }
            
            if (currentFrequency > maxFrequency) {
                maxFrequency = currentFrequency;
                mode = data[j];
            }
        }
    }
    
    return mode;
}
    
var data = [5, 9, 7, 1, 3, 2, 9, 8, 2, 9];
    
console.log("Mean: " + mean(data));
console.log("Median: " + median(data));
console.log("Mode: " + mode(data));
