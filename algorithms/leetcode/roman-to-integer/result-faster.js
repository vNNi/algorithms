/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const numbersRomans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let len = 0;
    const letters = s.split('');
    for(;len <= letters.length-1;) {
        const current = letters[len];
        const next = letters[len+1];
        if(current === 'I' && (next === 'V' || next === 'X')){
            total+= (numbersRomans[next] - numbersRomans[current])
            /**
             * here we jump the next to dont need iterate over all array and
             * to dont need to multiply * 2 :smile:
             */
            len+=2;
        }else if(current === 'X' && (next === 'L' || next === 'C')){
            total+= (numbersRomans[next] - numbersRomans[current])
            len+=2;
        }else if(current === 'C' && (next === 'D' || next === 'M')){
            total+= (numbersRomans[next] - numbersRomans[current])
            len+=2;
        }else{
            total+= numbersRomans[current];
            len++;
        }
    }
    return total;
};