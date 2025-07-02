// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, 
// resulting in a character being typed multiple times.

// You are given a string word, which represents the final output displayed on Alice's screen. You are also given a positive integer k.

// Return the total number of possible original strings that Alice might have intended to type, if she was trying to type a string of 
// size at least k.

// Since the answer may be very large, return it modulo 109 + 7.

 

// Example 1:

// Input: word = "aabbccdd", k = 7

// Output: 5

// Explanation:

// The possible strings are: "aabbccdd", "aabbccd", "aabbcdd", "aabccdd", and "abbccdd".

// Example 2:

// Input: word = "aabbccdd", k = 8

// Output: 1

// Explanation:

// The only possible string is "aabbccdd".

// Example 3:

// Input: word = "aaabbb", k = 3

// Output: 8

// Constraints:

// 1 <= word.length <= 5 * 105
// word consists only of lowercase English letters.
// 1 <= k <= 2000


const handleOriginalTyped = (word, k)=> {
 const MOD = 1e9 + 7;
    const len = word.length;
    if (len === k) return 1;

    const block = [];
    let i = 0;
    while (i < len) {
        let j = i + 1;
        while (j < len && word[j] === word[j - 1]) j++;
        block.push(j - i);
        i = j;
    }

    const cnt = block.length;
    const mult = Array(cnt).fill(0);
    mult[cnt - 1] = block[cnt - 1];
    for (i = cnt - 2; i >= 0; i--) {
        mult[i] = (mult[i + 1] * block[i]) % MOD;
    }

    if (cnt >= k) return mult[0];

    const dp = Array.from({ length: cnt }, () => Array(k - cnt + 1).fill(0));
    for (i = 0; i <= k - cnt; i++) {
        if (block[cnt - 1] + i + cnt > k) {
            dp[cnt - 1][i] = block[cnt - 1] - (k - cnt - i);
        }
    }

    for (i = cnt - 2; i >= 0; i--) {
        let sum = (dp[i + 1][k - cnt] * block[i]) % MOD;
        for (let j = k - cnt; j >= 0; j--) {
            sum = (sum + dp[i + 1][j]) % MOD;
            const next = j + block[i];
            if (next > k - cnt) {
                sum = (sum - dp[i + 1][k - cnt] + MOD) % MOD;
            } else {
                sum = (sum - dp[i + 1][next] + MOD) % MOD;
            }
            dp[i][j] = sum;
        }
    }

    return dp[0][0];
    


}
console.log(handleOriginalTyped("aabbccdd", 7))