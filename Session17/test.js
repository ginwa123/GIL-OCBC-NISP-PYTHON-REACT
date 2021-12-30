// function twoNumber(a, b, first, finalize) {
//   first(a + b);
//   finalize()
// }

// twoNumber(
//   10,
//   +5,
//   (value) => {
//     console.log(value);
//   },
//   () => {
//     console.log("finish");
//   }
// );

function makePromise() {
  return new Promise((resolve, reject) => {
    if (message === "") return reject("Fuck you");
    return resolve("You are my bestie");
  });
}

console.log(makePromise(""));
