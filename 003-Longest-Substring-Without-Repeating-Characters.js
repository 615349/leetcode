/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Difficulty:Medium
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */

    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int i = 0, j = 0;
        int maxLen = 0;
        boolean[] exists = new boolean[256];
        while(j < n){
            if(exists[s.charAt(j)]){
                // met the repeat character, update the maxlen;
                maxLen = Math.max(maxLen, j - i);
                // update pointer i
                while(s.charAt(i) != s.charAt(j)){
                    exists[s.charAt(i)] = false;
                    i++;
                }
                i++;
                j++;
            } else {
                exists[s.charAt(j)] = true;
                j++;
            }
        }
        maxLen = Math.max(maxLen, n - i);
        return maxLen; 
    }
