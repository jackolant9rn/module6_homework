let myNumber = +prompt('Введите любое число до 1000, чтобы проверить, является ли оно простым');
function checkPrimeNumber(myNumber) {
    if (typeof myNumber != 'number' || Number.isNaN(myNumber) || myNumber > 1000) {
        return 'Данные неверны!';
    } else if (myNumber < 0) {
        return 'Отрицательные числа к натуральным не относятся и, соответственно, не могут быть простыми';
    } else if (!Number.isInteger(myNumber)) {
        return 'Нецелые (дробные) числа к натуральным не относятся и, соответственно, не могут быть простыми';
    } else if (myNumber === 0) {
        return 'Ноль не является натуральным числом и, соответственно, не является ни простым, ни составным.';
    } else if (myNumber === 1) {
        return 'Единица не является ни простым, ни составным числом, у неё только один делитель — 1';
    } else {
        for (let i = 2; i < myNumber; i++) {
            if (myNumber % i == 0) {
                return 'Число является составным';           
            }
        }
        return 'Число является простым';
    }
}

console.log(checkPrimeNumber(myNumber));