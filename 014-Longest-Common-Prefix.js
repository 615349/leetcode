

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

比對前兩個字串，從頭開始取出相同的部分為共同字首
後面的字串只要與目前的共同字首比對即可
['abcd','abccc','abdec'] ，一開始'abcd','abccc'共同字首前3碼'abc'
接下來只要將'abc','abdec'做比對，發現剩下'ab'，也就是最長的共同字首


var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length == 0) return "";

    // same表示目前發現的共同字首，一開始為strs[0]
    var same = strs[0];

    // 只需要比對same跟目前字串共同的字元就好
    for(var i = 1 ; i<strs.length ; i++){
        var str = strs[i];

        // 取目前的字串str跟same相等的部分做為新的same
        var j = 0;
        for(; j < same.length ; j++){
           if(same[j] != str.charAt(j)){
                break;
           } 
        }
        // same與目前字串str前幾位相同，就做為新的same
        same = same.slice(0,j);
    }

    return same;
};
