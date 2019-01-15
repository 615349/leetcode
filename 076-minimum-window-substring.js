Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

中心思想是设立一个map，把s中的所有的值都映射到map中

然后设立一个全局的left和minLen，来浮动。
该窗口的大小就是从left到i（i是s的循环变量）
left从0开始。当s[left]不在之前创立的map中，说明该窗口还有缩小的可能性。

对s进行循环。对每个元素都进行--map[s[i]].
当s[i]在map中的值大于0的时候，说明该元素在t中存在，将count++
当count等于t的长度的时候，说明该window包含了所有必须的元素

这个时候需要进行压缩窗口了。将left++，看看s[left]是否在map内
如果不是，left继续自加
如果是，这个就是我们要的其中一个结果

将所有的结果进行比较就是我们要的答案了

另外在上面把map里面的值减去了，那么相应的就要加上。跟dfs的思想有点类似

var minWindow = function(s, t) {
    let result = "";
    if (!s || !t) {
        return result;
    }

    const map = {};
    const m = s.length;
    const n = t.length;
    for (let i = 0; i < n; i++) {
        if (!map[t[i]]) {
            map[t[i]] = 1;
        } else {
            ++map[t[i]];
        }
    }

    let count = 0;
    let left = 0;
    let minLen = ~(1 << 31);
    for (let i = 0; i < m; i++) {
        if (map.hasOwnProperty(s[i])) {
            if (map[s[i]] >= 1) ++count;
            --map[s[i]];
        }
        while (count === n) {
            if (minLen > i - left + 1) {
                minLen = i - left + 1;
                result = s.slice(left, left + minLen);
            }
            if (map.hasOwnProperty(s[left])) {
                if (map[s[left]] >= 0) --count;
                ++map[s[left]];
            }
            left++;
        }
    }

    return result;
};
