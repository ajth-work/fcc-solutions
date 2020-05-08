let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  console.log(users.hasOwnProperty(obj))
  if (
    'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users
  ) {
    return true;
  } else return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));
