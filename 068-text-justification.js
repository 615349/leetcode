Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]


这道题实在没有什么算法可言，就一个一个遍历

一个比较特别的要求是如果空格不是均匀分布的，则从左边开始的空格多一个，比如
maxWidth - totalLen = 7, 单词有5个，那么也就是
每个空格都至少有1，即7/(5 - 1)= 1
前三个单词间距都要多一个空格变成2个
第四个单词间距是1

对于每一个str而言，当前的长度加上words[i]的长度是否超过了target，分成三种情况，分别是等于，小于和大于
tricky的地方
a，如果是大于的情况，也就是之前的str加上当前的words[i]的长度超标了，那么需要将i--，因为新的str应该从当前的words[i]开始
b，同样是大于的情况，需要考虑str只包含一个单词的情况，原因是
const numberOfSpace = Math.floor((maxWidth - totalLen) / (m - 1)) + 1;
不能让分母为0
上面的numberOfSpace的意思是两个单词之间的空格数，totalLen是包含空格在内的，比如
str = 'a b c'
totalLen = 5
所以相当于单词间的空格被多减一次了

