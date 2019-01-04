Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

这题是leetcode里面提交通过率最低的

有一个note，99e2.5，这个是false，这里不是把2.5看成e的指数，而是看成(99e2).5
所以这样自然是false的。数学上是可以Math.exp(2.5)的

主要分成三段来处理，
第一段是第一个字符
第一个字符只能是+, -, .

第二段要分成5种情况，分别是数字，+/-（只能在e后面）, dot和e

第三段是最后一个字符
只能是数字或者dot
如果是dot，前面不能出现e或者dot，并且倒数第二个字符必须是数字 

/**
 * @param {string} s
 * @return {boolean}
 */

const PLUS = '+';
const MINUS = '-';
const DOT = '.';
const NUM_0 = '0';
const NUM_9 = '9';
const E = 'e';

var isNumber = function(s) {
    s = s.trim();
    
    const n = s.length;
    
    if(n === 0) return false;
    
    /* check if e existed */
    let isExp = false;
    /* check if dot existed */
    let isDot = false;
    /* check if digit existed */
    let isDigit = false;
    
    /* handle first char */
    if(s[0] < NUM_0 || s[0] > NUM_9) {
        /* not a number */
        if (s[0] === PLUS || s[0] === MINUS || s[0] === DOT) {
            if (n === 1) {
                return false;
            }
            if(s[0] === DOT) {
                isDot = true;
            }
        } else {
            return false;
        }
    } else {
        isDigit = true;
    }
    
    /* handle middle chars */
    for(let i = 1; i < n-1; i++) {
        switch(s[i]) {
            case E:
                /* e cannot follow +/-, digit has appeared, and cannot be the last char */
                if (!isExp && s[i-1] !== PLUS && s[i-1] !== MINUS && isDigit && i !== n - 1) {
                    isExp = true;
                } else {
                    return false;
                }
                break;
                
            case PLUS:
            case MINUS:
                /* besides the first +/-, +/- can only follow e */
                if (s[i-1] !== E) {
                    return false;
                }
                break;
                
            case DOT:
                /* dot can only happen once and cannot follow e */
                if (!isDot && !isExp) {
                    isDot = true;
                } else {
                    return false;
                }
                break;
                
            default:
                if (s[i] < NUM_0 || s[i] > NUM_9) {
                    return false;
                } else {
                    isDigit = true;
                }
                break;
        }
    }
    
    /* handle last char */
    /* last char can only be digit or . 
     * if it is ., no e or . is presented before, the second last char must be a digit
     */
    if ((s[n-1] === DOT) && !isExp && !isDot && n >1 && s[n-2] >= NUM_0 && s[n-2] <= NUM_9) {
        return true;
    } else if(s[n-1] >= NUM_0 && s[n-1] <= NUM_9) {
        return true;
    } else {
        return false;
    }
};
