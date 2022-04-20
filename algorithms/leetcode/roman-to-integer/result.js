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
    const letters = s.split('');
    for(let i = 0; i <= letters.length-1 ; i++) {
        const current = letters[i];
        const past = letters[i-1];
        console.log('current, past', current, past);
        if((current === 'V' || current === 'X') && past === 'I'){
            total+= (numbersRomans[current] - (2*numbersRomans[past]))
        }else if((current === 'L' || current === 'C') && past === 'X'){
            total+= (numbersRomans[current] - (2*numbersRomans[past]))
        }else if((current === 'D' || current === 'M') && past === 'C'){
            /*
            * here we need to do (2*past) because we added him
            * in the last iteration
            */
            total+= (numbersRomans[current] - (2*numbersRomans[past]));
        }else{
            total+= numbersRomans[current];
        }
    }
    return total;
};