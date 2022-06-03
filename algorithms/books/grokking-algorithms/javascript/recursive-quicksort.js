/**
 * Choosing a random pivot is statistically likely to give you something close to the median. 
 * Take a random number from a list, 50% of the time this number is in the middle 50% of the list, 
 * meaning in the worst case it has 75% of the list to one side and 25% on the other. 
 * Obviously performance is even better when we chose closer to the true median.
 */

const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    else {
        let pivot = arr[0] // can change to a random number from array length
        let less = arr.filter((item) => item < pivot);
        let greater = arr.filter((item) => item > pivot); 

        return [...quickSort(less), ...[pivot], ...quickSort(greater)];
    }
};