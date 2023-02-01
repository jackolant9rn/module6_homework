const exponent = (x, n) => {
    if (typeof x != 'number' || typeof n != 'number' || Number.isNaN(x) || Number.isNaN(n) || !Number.isInteger(x) || !Number.isInteger(n) || x < 0 || n < 0) {
        return 'Данные неверны!';
    } else {
        return Math.pow(x, n);
    }
}
  
console.log(exponent(2, 2));
console.log(exponent(3, 4));
console.log(exponent(3.14, 8));
console.log(exponent(-4, 5));
console.log(exponent(6, NaN));
console.log(exponent('text', 7));
console.log(exponent(null, true));