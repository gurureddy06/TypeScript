// palindrome check
function isPalindrome(str) {
    var removed = str.toLowerCase().replace(/\s+/, '');
    var reversed = removed.split('').reverse().join('');
    return removed === reversed;
}
console.log(isPalindrome("reddy"));
console.log(isPalindrome("oyo"));
