function isPalindrome(x) {
    const palindromeWord = x.toLowerCase()
    const invertedWord = palindromeWord.split('').reverse().join('');
    return palindromeWord === invertedWord;
}

result = isPalindrome("Racecar")