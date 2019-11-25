var generate = function(numRows) {
    const result = [];
    
    if (numRows === 0) {
        return result;
    }
    
    result.push([1]);
    if (numRows === 1) {
        return result;
    }
    
    result.push([1, 1]);
    if (numRows === 2) {
        return result;
    }
    
    for(let i = 2; i < numRows; i++) {
        const arr = [];
        arr.push(1);
        const lastArrayIndex = result.length - 1;
        const lastArray = result[lastArrayIndex];
        const lastArrayLength = lastArray.length;
        for(let j = 1; j < lastArrayLength; j++) {
            arr[j] = lastArray[j-1]+lastArray[j];
        }
        arr.push(1);
        result.push([...arr]);
    }
    return result;
};
