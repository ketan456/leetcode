function isPalindrome(x){
    const y = [...String(x)];
    console.log(y)
    for (let i = 0; i < y.length / 2; i++) {
        console.log(y.length - i - 1)
        if (y[i] !== y[y.length - i - 1]) {
            return false
        }
    }

    return true
};

console.log(isPalindrome(1221))