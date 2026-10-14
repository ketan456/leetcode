function isPalindrome(s: string): boolean {
    const x = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const cleanString = [...String(x)];
    for (let i = 0; i < cleanString.length / 2; i++) {
        if (cleanString[i] !== cleanString[cleanString.length - i - 1]) {
            return false
        }
    }
    return true
};