hasDuplicates([1, 2, 3])
hasDuplicates([1, 2, 3, 3])
hasDuplicates([1, 2, 3, 8, 1, 4])


function hasDuplicates(inputArray) {
    // add your code here
    let myset = new Set();
    for (i of inputArray) {
        if (myset.has(i)) {
            /* console.log(true); */
            return true;
        }
        myset.add(i)
    }
    return false
}

