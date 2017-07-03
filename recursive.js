function factorial(n) {
    if (n != 0) { return n * factorial(n - 1); }
    return 1;
}

console.log(factorial(7));

function factorial(n) {
    let x = n;
    for (let i = 1; i < x; i++) {
        n = n * (x - i);
        //console.log(i);
        //console.log(n);
    }
    console.log(n);
}
factorial(6);

function factorial(n) {
    let answer = 1;
    for(let i = 0; i < n; i++) {
        answer *= (n - i);
    }
    return answer;
}
console.log (factorial (5));
