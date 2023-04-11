let delay = 100
const list = ["|", "/", "-", "\\"];
let count = 3
for (let i = 0; i < count; i++) {
  for (const step in list) {
    setTimeout(() => {
      process.stdout.write(`\r ${list[step]}   `);
    }, delay);
    delay += 200

  }
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);