let num;
let Iee = Boolean(num)
console.log(Iee)

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person.firstName);
console.log(person.lastName);

let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person1['firstName']);
console.log(person1['lastName']);

person.firstName = 'Jane';

console.log(person.firstName);

person.Age = 21

console.log(person.Age)

delete person.Age

console.log(person.Age)


console.log('Age' in person)
console.log('lastName' in person)
