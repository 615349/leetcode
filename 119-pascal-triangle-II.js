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
        const lastArrayLength = lastArray.length;
        for(let j = 1; j < lastArrayLength; j++) {
            arr[j] = lastArray[j-1]+lastArray[j];
        }
        arr.push(1);
        result.push([...arr]);
    }
    return result[rowIndex];
};
