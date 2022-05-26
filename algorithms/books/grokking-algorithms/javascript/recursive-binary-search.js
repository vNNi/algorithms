// this is a tail recursion?! search more too...
 
const search = (list, item) => {
    const middle = Math.floor(list.length / 2);
    
    if(list[middle] == item) return item;

    if(list[middle] > item) {
        return search(list.slice(0, middle), item)
    }else if(list[middle] < item){
        return search(list.slice(middle + 1, list.length), item)
    }
    return false;
}