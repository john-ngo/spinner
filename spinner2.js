const array = ['|', '/', '-', '\\'];
let delay = 100;

const spinner = number => {
  for (let i = 0; i < number; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${array[i % array.length]}   `);
    }, delay += 200);
  }

  setTimeout(() => console.log(), delay);
};

spinner(30);