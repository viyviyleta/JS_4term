// задание 1
function phoneNumber(array){
    if (array.length != 10 && 
        array.every(function (num) {return num >= 0 && num <=9}))
        return undefined;

        return '(' + array.slice(0,3).join('') + ')' + array.slice(3,6).join('') + '-' + array.slice(6,10).join('');
}

console.log (phoneNumber([3, 7, 5, 2, 4, 5, 6, 7, 8, 9]));

// задание 2

class Challenge
{
    static solution(number: number): number {
        if (number <= 0)
            return 0;

        let sum = 0;
        for(let i = 1; i < number; i++){
            if (i % 3 == 0 || i % 5 == 0){
                sum += i;

            }
        }
        return sum;
    }
}

console.log (Challenge.solution(10));
console.log (Challenge.solution(-2));

// задание 3

function shift(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; 

    let temp = new Array(n);

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        temp[newIndex] = nums[i]; 
    }

    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
shift(nums, k);
console.log(nums); 

// задание 4

function median(nums1: number[], nums2: number[]): number {
    let nums = nums1.concat(nums2).sort((a, b) => a - b);

    let center = Math.floor(nums.length / 2); 

    if (nums.length % 2 == 0) {
        return (nums[center - 1] + nums[center]) / 2;
    } else {
        return nums[center];
    }
}

console.log(median([5, 7], [3, 1])); 
