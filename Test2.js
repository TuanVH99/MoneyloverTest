// Cài đặt chương trình tìm số thứ N trong dãy Fibonacci.

function Fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let prev1 = 0;
    let prev2 = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prev2 + prev1;
        prev1 = prev2;
        prev2 = current;
    }

    return current;
}

console.log(Fibonacci(10));