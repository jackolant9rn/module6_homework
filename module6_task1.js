let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '10', NaN, null];

function countEvenOddItems(array) {
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
  
    for (let i = 0; i < array.length; ++i) {
        if (typeof array[i] != 'number' || Number.isNaN(array[i])) {
            continue;
        } else if (array[i] === 0) {
            ++countZero;
        } else if (array[i] % 2 === 0) {
            ++countEven;
        } else {
            ++countOdd;
        }
    }
    console.log('Чётных элементов в массиве - ' + countEven)
    console.log('Нечётных элементов в массиве - ' + countOdd)
    console.log('Нулевых элементов в массиве - ' + countZero)
};

countEvenOddItems(arr);