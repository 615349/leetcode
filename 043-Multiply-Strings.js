/**
 * https://leetcode.com/problems/multiply-strings/description/
 * Difficulty:Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.
 * Note:
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

使用string的原因是可以突破long long这样的存储限制
具体如何计算的，举个例子
		1	5
	*	2	5
------------------------------- //每个数字分别相乘
		5	25
	2	10
------------------------------- //把每个位置上的相加
	2	15	25
------------------------------- //进制，把carrier进上去
	2	15+2	 5
-------------------------------
	2	17	 5
-------------------------------
	2+1	7	 5
-------------------------------
	3	7	 5

另外，如果一个m位数乘以n位数，结果最多为m + n
比如3位数乘以2位数，那么num1 * num2 < 1,000 * 100 = 100,000
所以最多是5位数，也就是m + n位数;最少是4位数，也就是m + n - 1为数

所以可以设立一个有m + n位数的数组，并且做初始化
并且最后需要清除最高位可能的0

const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") return "0";

  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);
  let i, j, mul, sum;
  for (i = len2 - 1; i >= 0; i--) {
    for (j = len1 - 1; j >= 0; j--) {
      mul = Number(num2[i]) * Number(num1[j]);
      //需要加上原来该位已有的值
      sum = mul + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      //如果是进位，则是自加。考虑mul是5，原来该值是6
      //result[i + j + 1] = 1, result[i+j]则自加1
      result[i + j] += Math.floor(sum / 10);
    }
  }

  //像上面说的，有些情况下最高位还是0，需要清除
  if (result[0] === 0) {
    return result.slice(1).join("");
  }

  return result.join("");
};


ts:
const multiply = (num1: string, num2: string): string => {
  if (num1 === "0" || num2 === "0") return "0";

  const len1 = num1.length;
  const len2 = num2.length;
  const result: Array<number> = new Array(len1 + len2).fill(0);
  let i: number = 0,
    j: number = 0,
    mul: number,
    sum: number;
  for (i = len2 - 1; i >= 0; i--) {
    for (j = len1 - 1; j >= 0; j--) {
      mul = Number(num2[i]) * Number(num1[j]);
      sum = mul + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  if (result[0] === 0) {
    return result.slice(1).join("");
  }

  return result.join("");
};

