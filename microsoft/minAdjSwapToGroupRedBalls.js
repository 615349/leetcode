There are N balls positioned in a row. Each of them is either red or white.
In one move we can swap two adjacent balls.
We want to arrange all the red balls into a consistent segment. What is the minimum number of swaps needed?

Write a function:
class Solution (public int solution(String S);)

that, given string S of length N built from characters "R" and "W", representing red and white balls respectively,
returns the minimum number of swaps needed to arrange all the red balls into a consistent segment.
If the result exceeds Maths.pow(10, 9), return -1.

Examples

1, Given S = "WRRWWR", your function should return 2:
"WRRWRW"
"WRRRWW"

2, Given S = "WWRWWWRWR", your function should return 4:
"WWWRWWRWR"
"WWWWRWRWR"
"WWWWWRRWR"
"WWWWWRRRW"

3, Given S = "WWW", your function should return 0

4, Given S = "RW" repeated 100,000 times, your function should return -1 as the minimum number of swaps exceeds the limit

好难啊，花了一天多的时间才想清楚。
首先，最小的交换一定是以红球中的最中间为基准，其他红球向这个基准红球靠拢
第二，红球a向中间基准红球靠拢的过程中，
  如果a和基准红球中间没有其他红球，需要的交换数是mid - 1 - i，因为a只需要到达mid-1就和基准红球一起了
第三，红球a向中间基准红球靠拢的过程中，
  如果a和基准红球中间还有一个其他红球b，那么对于a来说，只需要到达mid-2位置，因为b会在mid-1
第四，如果没有红球，或者1个红球，则返回0
最后，如果这个数字超过一定的limit，就返回-1


