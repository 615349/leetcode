/**
 * https://leetcode.com/problems/decode-ways/description/
 * Difficulty:Medium
 *
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 * For example,
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * The number of ways decoding "12" is 2.
 *
 */


跟070 climb stairs差不多的，i对应的值是由i-1和i-2决定的，这样的情况肯定是dp

另外，只要解码失败的，都是返回0
比如50，比如04，比如300

这个意思是这样的，如果s[i]等于0，那么s[i-1]必须是1或者2，否则解码失败。
如果s[i-1]是1或者2，那么s[i-1]s[i]这个是唯一的，所以dp[i] = dp[i-2]

如果s[i]不是0，那么如果s[i-1]s[i]是在11到26之间，那么dp[i]= dp[i-1] + dp[i-2], 也就是说s[i-1]到s[i]只有一种解法，另外还要加上可能从s[i-2]直接跳两步到s[i]

如果s[i-1]s[i]不是在11和26之间，那s[i-1]到s[i]只有一种解法，所以dp[i]跟dp[i-1]相等

上面出现了dp[i-2]，所以循环要从i=2开始
设置dp[i]表示0到i（包含i）有多少种解法

所以需要首先计算出dp[0]和dp[1]的值
var numDecodings = function(s) {
    if (!s || s.length === 0 || s[0] === '0') {
        return 0;
    }
    
    const n = s.length;
    
    const dp = new Array(n).fill(1);
        
    let tmp = Number(s.substr(0, 2));
    if (s[1] === '0') {
        if (s[0] === '1' || s[0] === '2') {
            dp[1] = 1;
        } else {
            return 0;
        }
    } else {
        if (tmp > 10 && tmp < 27) {
            dp[1] = 2;
        } else {
            dp[1] = 1;
        }
    }
    
    for(let i = 2; i < n; i++) {
        tmp = Number(s.substr(i-1, 2));
        if (s[i] === '0') {
           if (s[i-1] === '1' || s[i-1] === '2') {
               dp[i] = dp[i-2]
           } else {
               return 0;
           }
        } else {
            if (tmp > 10 && tmp < 27) {
                dp[i] = dp[i-1] + dp[i-2]
            } else {
                dp[i] = dp[i-1]
            }
        }
    }
    
    return dp[n-1]
};

这里很明显可以看出来，应该把dp[1]也放入循环中来避免重复的逻辑

上述的代码修改一个小地方就可以了
如果是dp[i-2]担心过界的话，用
dp[i-2] || dp[0]就可以了
注意+的优先级高于||，所以
dp[i] = dp[i-1] + (dp[i-2] || dp[0]);
这个是需要括号的

var numDecodings = function(s) {
    if (!s || s.length === 0 || s[0] === '0') {
        return 0;
    }
    
    const n = s.length;
    
    const dp = new Array(n).fill(1);
        
    let tmp;
    
    for(let i = 1; i < n; i++) {
        tmp = Number(s.substr(i-1, 2));
        if (s[i] === '0') {
           if (s[i-1] === '1' || s[i-1] === '2') {
               dp[i] = dp[i-2] || dp[0];
           } else {
               return 0;
           }
        } else {
            if (tmp > 10 && tmp < 27) {
                dp[i] = dp[i-1] + (dp[i-2] || dp[0]);
            } else {
                dp[i] = dp[i-1]
            }
        }
    }
    
    return dp[n-1]
};
