const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const name = input.value.trim(); // прибираємо пробіли з початку і кінця
  output.textContent = name === '' ? 'Anonymous' : name;
});
