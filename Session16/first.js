function button() {
  let value = 1;
  function changeValue() {
    value = 100;
  }
  console.log(value);
}
let a = 1;


const myClassroom = {
    name: "classA",
    participants : [
      {
        name: "gilang"
      },
      {
        name: "pras"
      }
    ],
    session : ""
}

const {name , participants, session} = myClassroom
const [nameA, nameB] = participants
console.log(myClassroom);
console.log(nameA, nameB)

