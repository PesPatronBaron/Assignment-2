const form = document.querySelector('form');
    const numInput = document.querySelector('#num');
    const resultInput = document.querySelector('#factorial');

    const factorial = (n) => {
      if (n === 0 || n === 1) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = parseInt(numInput.value);

      if (isNaN(value) || value < 0) {
        resultInput.value = 'Invalid input';
        return;
      }

      const fact = factorial(value);
      resultInput.value = fact;
    });