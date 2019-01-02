Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

和056一起看就可以了

function interval(start, end) {
    this.start = start;
    this.end = end;
}

var insert = function(intervals, newInterval) {
    const combined = [...intervals, newInterval];
    if (combined.length < 2) {
        return combined;
    }
        
    combined.sort((a, b) => a.start - b.start);
    let { start, end } = combined[0];
        
    const result = [];
    
    for(let i = 1; i < combined.length; i++) {
        let nstart = combined[i].start;
        let nend = combined[i].end;
        
        if(end >= nend) {
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
