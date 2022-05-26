const max = (list) => {

    // Returns first number if list length is 1
    if (list.length === 1) return list[0]
  
    // Returns the greater number between the first 2 numbers in an array
    if (list.length === 2) return (list[0] > list[1]) ? list[0] : list[1]
  
    // If array length is 3+ (Read Below until the last two, and return from stack comparing with the last first item in the moment)
    const subMax = max(list.slice(1));
    return (list[0] > subMax) ? list[0] : subMax;
  }