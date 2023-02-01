function numbersOutput(a, b) {
    let i = a;
    const timerId = setInterval(function() {
      console.log(i);
      if (i == b) {
        clearInterval(timerId);
      }
      i++;
    }, 1000);
}
    
numbersOutput(5, 15);