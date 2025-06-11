// palindrome check

function isPalindrome(str: string): boolean {
    const removed : string = str.toLowerCase().replace(/\s+/,'');
    const reversed : string = removed.split('').reverse().join('');
    return removed === reversed;
}
console.log(isPalindrome("reddy"));
console.log(isPalindrome("oyo"));