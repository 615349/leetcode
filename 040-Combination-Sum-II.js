/**
 * Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * Each number in C may only be used once in the combination.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 * A solution set is:
 * [
 *  [1, 7],
 *  [1, 2, 5],
 *  [2, 6],
 *  [1, 1, 6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

跟39类似

public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<List<Integer>>();
    List<Integer> curr = new ArrayList<Integer>();
    Arrays.sort(candidates);
    helper(result, curr, 0, target, candidates);
    return result;
}
 
public void helper(List<List<Integer>> result, List<Integer> curr, int start, int target, int[] candidates){
    if(target==0){
        result.add(new ArrayList<Integer>(curr));
        return;
    }
    if(target<0){
        return;
    }
 
    int prev=-1;
    for(int i=start; i<candidates.length; i++){
        if(prev!=candidates[i]){ // each time start from different element
            curr.add(candidates[i]);
            helper(result, curr, i+1, target-candidates[i], candidates); // and use next element only
            curr.remove(curr.size()-1);
            prev=candidates[i];
        }
    }
}
