// задание 1
function phoneNumber(array) {
    if (array.length != 10 &&
        array.every(function (num) { return num >= 0 && num <= 9; }))
        return undefined;
    return '(' + array.slice(0, 3).join('') + ')' + array.slice(3, 6).join('') + '-' + array.slice(6, 10).join('');
}
console.log(phoneNumber([3, 7, 5, 2, 4, 5, 6, 7, 8, 9]));
// задание 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number <= 0)
            return 0;
        var sum = 0;
        for (var i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
console.log(Challenge.solution(-2));
// задание 3
function shift(nums, k) {
    var n = nums.length;
    k = k % n;
    var temp = new Array(n);
    for (var i = 0; i < n; i++) {
        var newIndex = (i + k) % n;
        temp[newIndex] = nums[i];
    }
    for (var i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
shift(nums, k);
console.log(nums);
// задание 4
function median(nums1, nums2) {
    var nums = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var center = Math.floor(nums.length / 2);
    if (nums.length % 2 == 0) {
        return (nums[center - 1] + nums[center]) / 2;
    }
    else {
        return nums[center];
    }
}
console.log(median([5, 7], [3, 1]));
