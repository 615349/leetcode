
You are given two arrays A and B consisting of N integers each.

index K is named fair if the four sums (A[0] + ... + A[K-1), (A[K] + ... + A[N-1]),(B[0] + ... + B[K-1), (B[K] + ... + B[N-1]) are all equals.

return the number of fair indexes

https://leetcode.com/discuss/interview-question/451422/

先循环一遍计算得到总数，再第二次循环一遍，计算一半的值
因为是平分为两个数组，所以如果和不是偶数可以直接返回0
另外题目要求是两个非空数组，那么第二次循环的时候是从0到length - 1

const fairIndex = (A, B) => {
  let sumA = 0, sumB = 0;
  
  const { length } = A;
  
  for(let i = 0; i < length; i++) {
    sumA += A[i];
    sumB += B[i];
  }
    
  if (sumA & 1 || sumB & 1 || sumA !== sumB) {
    return 0;
  }
  
  const halfSum = sumA / 2;
    
  let result = 0;
  let tempA = 0, tempB = 0;
  for(let i = 0; i < length - 1; i++) {
    tempA += A[i];
    tempB += B[i];
    if (tempA === halfSum && tempB === halfSum) {
      ++result;
    }
  }
  
  return result;
}

fairIndex([4, -1, 0 ,3], [-2, 5, 0, 3])
