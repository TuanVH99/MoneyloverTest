// Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó. Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3. Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.

function nextCombination(combination, k, n) {
    for (let i = k - 1; i >= 0; i--) {
        if (combination[i] < n - k + i + 1) {
            combination[i]++;
            for (let j = i + 1; j < k; j++) {
                combination[j] = combination[j - 1] + 1;
            }
            return true;
        }
    }
    return false;
}

function showCombination(combination) {
    console.log(combination);
    while (nextCombination(combination, combination.length, n)) {
        console.log(combination);
    }
}

let n = 5;
let k = 3;
let combination = [];
for (let i = 1; i <= k; i++) {
    combination.push(i);
}
showCombination(combination);
