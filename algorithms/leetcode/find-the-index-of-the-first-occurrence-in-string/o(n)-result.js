/**
* @param {string} haystack
* @param {string} needle
* @return {number}
*/
var strStr = function(haystack, needle) {
   if(needle==="") return 0
   let i=0,j=0
   while(i<haystack.length){
       if(haystack[i]!==needle[j]){
           i=i-j+1
           j=0
       }
       else{
           i++
           j++
       }
       if(j===needle.length) return i-j
   }
   return -1
};