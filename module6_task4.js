function numbersOutput(a, b) {
  if (typeof a != 'number' || typeof b != 'number' || Number.isNaN(a) || Number.isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b) || a > b) {
    console.log('Данные неверны!');
  } else {let i = a;
    const timerId = setInterval(function() {
      console.log(i);
        if (i == b) {
          clearInterval(timerId);
        }
      i++;
    }, 1000);
  }
}
    
numbersOutput(5, 15);

// Just a couple of tests

/*numbersOutput(16, 15);
numbersOutput(3.14, 15);
numbersOutput(5, NaN);
numbersOutput('5', 15);*/