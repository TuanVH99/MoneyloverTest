// Cho dãy số tự nhiên A. Cài đặt chương trình sắp xếp dãy số A từ nhỏ đến lớn và loại bỏ số không phải là số nguyên tố.

function generateRandomNumber(maxValue, minValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
}

function primeArray(inputArray) {
    const arr = inputArray.filter(isPrime)
    return arr.sort(function (a, b) { return (a - b) })
}

function isPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let A = []
for (let i = 0; i < 10; i++) {
    A.push(generateRandomNumber(1, 100))
}
console.log(A);
console.log(primeArray(A));