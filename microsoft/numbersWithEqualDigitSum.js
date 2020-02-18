write a function:
that given an array A consisting of N intergers, returns the maximum sum of two numbers whose digits add up to an equal sum.
if there are no two numbers whose digits have an equal sum, the function should return -1

examples:
1, A=[51, 71, 17, 42].
this function should return 93. there are two pairs of numbers whose digits add to an equal sum: (51, 42) and (17, 71). the first pair sums up to 93

2, A = [42, 33, 60]
this function should return 102.
42 and 60 has the same digits sum. and the sum of 42 and 60 is 102

3, A = [51, 32, 43]
this function should return -1
each number has unique digits sum

创建一个map，把digitsSum变成key，第一个遇到的是value
如果第二次同一个key，则计算result

const getDigitsSum = (num) => {
  let temp = num;
  let result = 0;
  while (temp) {
    result += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return result;
} 
const getSum = (A) => {
  const { length } = A;
  let result = -1;
  if (length < 2) {
    return result;
  }
  const map = {};
  for (let i = 0; i < length; i++) {
    const digitsSum = getDigitsSum(A[i]);
    if (!map[digitsSum]) {
      map[digitsSum] = A[i];
    } else {
      result = Math.max(result, A[i] + map[digitsSum]);
    }
  }
  return result;
}
