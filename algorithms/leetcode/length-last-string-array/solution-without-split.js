var lengthOfLastWord = function(s) {
    s = s.trim();
    let i = s.length-1, count=0;
    for(i; i>=0; i--)
    {
        if(s[i] !== ' ') count++;
        else return count;
    }
    return count;
}