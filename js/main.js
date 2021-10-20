// get username
const name = prompt('Please, enter your name 🙏');

// get surname
const surname = prompt('Great!, Now enter your surname 👌');

// get colour
const colour = prompt('Ok! What is your favourite color?🎨');

// dom actions
document.getElementById('title').innerHTML = name + surname + colour + '21';
// document.getElementById('title').innerHTML = `${name}${surname}${colour}21`;
