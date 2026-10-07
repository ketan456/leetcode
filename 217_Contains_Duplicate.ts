function containsDuplicate(nums: number[]): boolean {
    let setArray = new Set<number>()
    for (let num of nums) {
        if (setArray.has(num)) {
            return true;
        }
        setArray.add(num)

    }
    return false;

};

console.log(containsDuplicate([1,2,3,1]))