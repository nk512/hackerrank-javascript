function getSecondLargest(nums) {
    let secondMax;
    let max = Math.max.apply(null, nums);
    nums.sort((x,y)=> y-x);
    for(let e of nums){
        if(e < max){
            secondMax = e;
            break;
        }
    }
    return secondMax;
}