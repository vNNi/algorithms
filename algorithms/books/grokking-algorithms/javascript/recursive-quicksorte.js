const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    else {
        let pivot = arr[0]
        let less = arr.filter((item) => item < pivot);
        let greater = arr.filter((item) => item > pivot); 

        return [...quickSort(less), ...[pivot], ...quickSort(greater)];
    }
};