// maybe this is a tail recursion?! search more...

const count = (list) => {
    if(list.length === 0) return 0; // the last wil be acc (array.length) + 0 == array.length
    return 1 + count(list.slice(1))
};