const names = ['Joakim', 'Hans', 'Jeanette'];

// names[names.length] = 'Tommy';
// names[names.length] = 'colin';

names.unshift('colin')
names.shift()

names.push('colin')
names.pop()

const indexofHans = names.indexOf('Hans')

// names[indexofHans] = 'Hej'

const removed = names.splice(1, 1)

// console.log(removed)
console.log(names)