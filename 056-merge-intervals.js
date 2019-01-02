Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

注意，intervals的元素不是数组，虽然题目中是这样。
其每个元素实际上是一个obj
obj = {
	start: xxx
	end: xxx
}

解法：
首先根据每个元素的start做一个排序
然后用start，end指向前一个元素，nstart，nend指向后面一个元素
他们之间的关系有且仅有三种（--表示前一个元素，++表示后一个元素）
第一种
----------
  ++++++

第二种
----------
     +++++++
第三种
-----  
        ++++

第一二种情况并不把interval push到result数组，原因是可能出现下列情况:
对于第一种情况的：
--------------
  +++  
       ===

对于第二种情况的：
----------
      +++++++
        =======

所以，我们做push的情况，有且仅有当两个元素之间是断开的

最后，出了循环之后，还需要push start 和end，因为这个是最后一个interval了（三种情况下start 和 end的值都是指向最后一个interval，所以可以push start和end）


function interval(start, end) {
    this.start = start;
    this.end = end;
}


var merge = function(intervals) {
    if (!intervals || intervals.length < 2) {
        return intervals;
    }
    
    intervals.sort((a, b) => a.start - b.start);
    
    let { start, end } = intervals[0];
    
    const result = [];
    const n = intervals.length;
    
    for(let i = 1; i < n; i++) {
        let nstart = intervals[i].start;
        let nend = intervals[i].end;
        
        if (end >= nend) {
            continue;
        } else if (end >= nstart) {
            end = nend;
        } else {
            result.push(new interval(start, end));
            start = nstart;
            end = nend;
        }
    }
    
    result.push(new interval(start, end));
    
    return result;
};

