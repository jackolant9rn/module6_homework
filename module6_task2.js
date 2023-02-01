let myNumber = +prompt('Введите любое число до 1000, чтобы проверить, является ли оно простым');
function checkPrimeNumber(myNumber) {
    if (typeof myNumber != 'number' || Number.isNaN(myNumber) || myNumber > 1000) {
        return 'данные неверны (введено не число либо число больше 1000)!';
    } else if (myNumber <= 0 || !Number.isInteger(myNumber)) {
        return 'не является натуральным числом, соответственно, не может быть ни простым, ни составным';
    } else if (myNumber === 1) {
        return 'единица не является ни простым, ни составным числом, у неё только один делитель: 1';
    } else {
        for (let i = 2; i < myNumber; i++) {
            if (myNumber % i == 0) {
                return 'является составным числом';           
            }
        }
        return 'является простым числом';
    }
}

console.log(myNumber + ' - ' +  checkPrimeNumber(myNumber));