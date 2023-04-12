// Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó. Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3. Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.


function combination(n, k) {
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result = result * (n - k + i) / i;
    }
    return result;
}

console.log(combination(4, 3));

function sinhTiepTheo(tapHop, k, n) {
    console.log('k: ' + k);
    console.log('n: ' + n);
    for (let i = k - 1; i >= 0; i--) {
        console.log('i: ' + i);
        console.log("n - k + i + 1: " + (n - k + i + 1))
        if (tapHop[i] < n - k + i + 1) {
            tapHop[i]++;
            console.log("tap hop[i]: " + tapHop[i]);
            for (let j = i + 1; j < k; j++) {
                console.log('j: ' + j);
                tapHop[j] = tapHop[j - 1] + 1;
                console.log("tapHop[j]: " + tapHop[j])
            }
            return true;
        }
    }
    return false;
}

function lietKeTatCaTongHop(tapHop) {
    console.log(tapHop);
    while (sinhTiepTheo(tapHop, tapHop.length, n)) {
        console.log(tapHop);
    }
}

let n = 4;
let k = 3;
let tapHop = [];
for (let i = 1; i <= k; i++) {
    tapHop.push(i);
}
lietKeTatCaTongHop(tapHop);
