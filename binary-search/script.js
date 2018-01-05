function binarySearch(arr, t) {

    arr.sort();
    
    var l = 0;
    var r = arr.length - 1;

    while (l <= r) {

        var m = Math.floor((r + l) / 2);

        if (arr[m] == t) {
            return m;
        } else if (arr[m] < t) {
            l = m + 1;
        } else if (arr[m] > t) {
            r = m - 1;
        }
    }
    
    return -1;
}

var arr = [5, 9, 7, 1, 3, 2, 9, 8, 2, 9];
var t = 5;

console.log(binarySearch(arr, t));      
