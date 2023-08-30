/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
    // Your logic here
    let count = 0;
    let mf =1;
    let item=null
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i]===nums[j]){
                count++; 
            }         
        }
         if (mf<count) {
            mf=count;
            item = (nums[i]) ;
        }
        count=0;
    }
        return item;
    }

console.log(majorityElement([3,2,3,-1,3,-1,-1])); // Output: 3 
console.log(majorityElement([3,2,1])); // Output: 3 
console.log(majorityElement([2,1,3,1,2,1])); // Output: 3 

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 