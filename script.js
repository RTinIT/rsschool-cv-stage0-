// The Binary Search. 
// There is an ordered Array.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];      
// Function decloration.
let binarySearch = function(numbers, element) {
// Setting the higher and lower Numbers.    
    let low = 0;
    let high = numbers.length - 1;
// Declaring a variable mid.    
    let mid;
// Using while to compare with Element.  
    while (low <= high) {
// Writing  a Formula to find the Middle of the Array.
        mid = Math.round((high - low)/2) + low;

        if (element === numbers[mid]) {
            return mid;            
        } else if (element < numbers[mid]) {
            high = mid - 1;
        } else if (element > numbers[mid]) {
            low = mid + 1;
        }
    }
//If there is not Element you're looking for that return -1.    
    return -1;
}

console.log(binarySearch(array, 7));