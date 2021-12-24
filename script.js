function missingNo(nums) {
    for (let i; i < nums.length; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
}