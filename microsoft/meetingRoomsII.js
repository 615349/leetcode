Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example, Given [[0, 30],[5, 10],[15, 20]], return 2.


会议室的数量，只会增加1或者0，不会减少
所以先对所有的会议时间进行排序，以开始时间进行排序

对数组进行遍历的时候，只需要判断后一个数组的开始时间是否大于结束时间。如果是，就不增加，否则

const meetingRooms = (intervals) => {  
  if (intervals.length === 0) {
    return 0;
  }
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  let result = 1;
  let lastEnd = intervals[0].end;
  
  for(let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > intervals[i-1][1]) {
      --result;
    }
    
    ++result;
  }
  
  return result;
}
