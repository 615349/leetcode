Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

注意一个特殊case
'a '
期待的结果是1

string是不能直接reverse的，
必须先split转成数组然后reverse然后再join化成string
当然也可以从原string的后面，取出char出来放入新的string

const getReversedString = (s) => s.split('').reverse().join('');

var lengthOfLastWord = function(s) {
    const EMPTY = '';
    const BLANK = ' ';
    // s = ''
    if(s === EMPTY) return 0;
    // s = 'abc'
    if(s.indexOf(BLANK) === -1) return s.length;  
    
    const reversed = getReversedString(s.trim());
    // s = 'a '
    if(reversed.indexOf(BLANK) === -1) return reversed.length;
    
    return reversed.indexOf(BLANK);
};
