const args = process.argv.slice(2);
const inputString = args[0];


if (!inputString) {
  console.log("Please provide a string.");
} else {
  const reversedString = inputString.split('').reverse().join('');
  console.log(reversedString);
}
