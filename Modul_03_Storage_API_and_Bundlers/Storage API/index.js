// LOCAL STORAGE
// localStorage.setItem('key', 'value');
// localStorage.setItem('username', 'John Doe');

// const username = localStorage.getItem('username');
// console.log(username);

// localStorage.removeItem('key');
// localStorage.removeItem('username');

// localStorage.clear();

// SESSION STORAGE
// sessionStorage.setItem('sesssionID', 12345);

// const sessionID = sessionStorage.getItem('sesssionID');
// console.log(sessionID);

// sessionStorage.removeItem('sesssionID');

const person = {
  name: 'Alice',
  age: 25,
  city: 'Berlin',
};

// console.log(person);
const personJSON = JSON.stringify(person);

// console.log(personJSON);

localStorage.setItem('user', person);
localStorage.setItem('user', personJSON);

const personOBJ = localStorage.getItem('user');
// console.log(JSON.parse(personOBJ));
