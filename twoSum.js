// imagine you have a list of numbers and a target number. your job is to find two numbers in that list that add up to the target number. you also need to tell which position those two numbers are at the list.

// [2,7,11,15] and target is 9. the output should be [0,1] because 2 + 7 is 9.

function twoSum(nums, target ){
    for(let i = 0; i<= nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    
    return []
}
