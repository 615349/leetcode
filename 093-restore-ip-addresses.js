Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]


典型的dfs题目
设置一个index，从0开始到s.length，这样可以作为结束条件
另外设置一个计算器，因为ip只能分成4段，所以time不能超过4
另外对于每个substring而言，不能超过255，也不能是'01'，也就是不能0开始同时长度超过1

因为对于每段而言，我们要取的值是[index, index + i]，所以i的范围是1到3
另外右边界index+i不能超过s的长度，如果超过那就直接break了，不用continue 了，因为i++之后，index+i的值更大了


const dfs = (s, result, array, index, time) => {
    if (time === 4 && index === s.length) {
        result.push(array.join('.'));
        return;
    }
        
    if (time >= 4) {
        return;
    }
    
    for(let i = 1; i < 4; i++) {
        if (index + i > s.length) break;
        let temp = s.slice(index, index+i);
        if (temp[0] === '0' && temp.length > 1 || Number(temp) > 255) continue;
        
        array.push(temp);
        dfs(s, result, array, index+i, time+1);
        array.pop();
    }
}

var restoreIpAddresses = function(s) {
    const result = [];
    
    if (!s || s.length === 0 || s.length > 12) {
        return result;
    }
    
    const array = [];
    
    dfs(s, result, array, 0, 0);
    
    return result;
};

