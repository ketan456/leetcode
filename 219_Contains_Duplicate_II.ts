function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // for(let i=0; i<nums.length; i++){
    //     for(let j= i + 1; j<nums.length; j++){
    //          if (nums[i] == nums[j] && Math.abs(i - j) <= k){
    //             return true;
    //         }
    //     }
    // }
    // return false;
        const set = new Set();
    for (let i = 0; i < nums.length; i++) {
            set.delete(nums[i - k - 1]);
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        }
    
    return false;
};

console.log(containsNearbyDuplicate([12,5,4,12,41,41,2500],2))