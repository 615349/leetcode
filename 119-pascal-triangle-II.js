跟上题差不多，这次是求最后一行
跟上题思路一样，加了一个小技巧，只要求左半边就可以了，右半边直接通过对成

var getRow = function(rowIndex) {
    const result = [];
    
    result.push([1]);
    if (rowIndex === 0) {
        return [1];
    }
    
    result.push([1, 1]);
    if (rowIndex === 1) {
        return [1, 1];
    }
    
    for(let i = 2; i <= rowIndex; i++) {
        const arr = [];
        arr.push(1);
        const lastArrayIndex = result.length - 1;
        const lastArray = result[lastArrayIndex];
        const halfLength = Math.floor(lastArray.length/2) + 1;
        let j = 1;
        for(; j < halfLength; j++) {
            arr[lastArray.length - j] = arr[j] = lastArray[j-1]+lastArray[j];
        }
        arr.push(1);
        result.push([...arr]);
    }
    return result[rowIndex];
};
