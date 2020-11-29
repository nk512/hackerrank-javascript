function modifyArray(nums) {
    nums.forEach(function(value, index){
        if(nums[index] % 2 == 0){
            nums[index] = value * 2;
        }else{
            nums[index] = value *3;
        }
    });
    return nums;
}