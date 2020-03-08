Write a function, given an integer N, returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N

examples:

1, Given N = 268, the function should return 5268
2, Given N = 670, the function should return 6750
3, Given N = 0, the function should return 50
4, Given N = -999, the function should return -5999

根据题目，分成两个类型，大于等于0和小于0
如果是大于等于0，只要遇到第一个比5小的，就把5插入到这个位置
如果是小于0，只要遇到第一个比5大的，就把5插入

第一步先把数字转换为字符串。注意如果是第二个情况，字符串index=0是'-'，所以要跳过这个

const insert = (str, index) => str.slice(0, index) + '5' + str.slice(index)

const getPositiveValue = (N) => {
  for(let i = 0; i < N.length; i++) {
    if (5 > Number(N[i])) {
      return insert(N, i);
    }
  }
}

const getNegativeValue = (N) => {
  let result;
  for(let i = 0; i < N.length; i++) {
    if (5 < Number(N[i])) {
      result = insert(N, i);
      break;
    }
  }
  return result;
}

const maxPossibleValue = (N) => {
  let result;
  
  if (N >= 0) {
    result = getPositiveValue(N.toString())
  } else {
    result = '-' + getNegativeValue(N.toString().slice(1))
  }
  
  return Number(result);
}
