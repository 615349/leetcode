Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

解答办法：如果needle的长度为0，则直接返回；如果haystack的长度小于needle长度直接返回-1；

其余的就是两重循环。一个小技巧是，当len1剩余的长度小于len2的时候直接返回

var strStr = function(haystack, needle) {
    const len1 = haystack.length;
    const len2 = needle.length;
    
    if(len2 === 0) {
        return 0;
    }
    
    if(len1 < len2) {
        return -1;
    }
    
    let i, j;
    
    for(i = 0; i <= len1 - len2; i++) {
        for(j = 0; j < len2; j++) {
            if (haystack[i + j] !== needle[j])
                break;
        }
        
        if (j === len2) return i;
    }
    
    return -1;
};
