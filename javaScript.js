//Первый урок

//примитивы
//string, Number, Boolean, undefined, null, Symbol, BigInt;

//ссылочные
//Object, Array,function

//typeOf

// const a = [];
// console.log(typeof a);

//особенности ссылочных типов данных

//1) более сложная структура
//2) есть свойсва и методы (методы примеры: pop(), unshift(), свойсва: length)

//let arr = [];
//for(let i = 0; i < arr.length; i++)

//React, Node.js - работаем с данными иммутабельно

// const a = [1,2,3,4];
// //1) сделать копию
// const b = [1,2,3,4];
// //2) работаю с копией и вношу нужные мне изменения
// b.push(1)
// console.log(b);//[1,2,3,4]

// const [isStudent, setIsStudent] = useState([
//     {id: 1, name: 'test1'},
//     {id: 2, name: 'test2'},
// ])

// setIsStudent()

//Map, filter -> return new []

//мутабельно
// const users1 = {
// 	// #1234
// 	id: 1,
// 	name: 'Bod',
// 	isStudent: true,
// };

// const user2 = users1;
// users2.name = 'Nika';
// console.log(users1 === users2); //true
// console.log('users1:',users1);
// console.log('user2:',user2);

//иммутабельно

// до появления spread оператора
// const users1 = {
// 	// #1234 - иммитация ссылки

// 	id: 1,
// 	name: 'Bod',
// 	isStudent: true,
// 	country: {// #4567 - новая ссылка
// 		id: 1,
// 	},
// };

// const users2 = {
// 	// #7654 - иммитация ссылки

// 	id: users1.id,
// 	name: users1.name,
// 	isStudent: users1.isStudent,
// 	country: users1.country, // тут наша ссылка с объекта user1 - #4567
// };
// console.log('isEqual:', users1 === users2); // isEqual: false
// console.log('key equar:', users1.id === users2.id); // key equar: true
// console.log('nested val:', users1.country === users2.country); //nested val: true

//spread

// const users1 = {
// 	id: 1,
// 	name: 'Bod',
// 	isStudent: true,
// };

// const users2 = { ...users1 }; // {...} копия объекта
// console.log('users2:', users2);
// console.log('isEqual: ', users1 === users2);

// деструктуризация

// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// };

// const name = employee.firstName;
// console.log(name);

//1) деструктуризация у объектов
// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// 	message: 'Hello world',
// };

// // const name = employee.firstName
// // const message = employee.message
// //const middleName = employee.middleName

// const { firstName, message, middleName } = employee;

// console.log(firstName);
// console.log(message);
// console.log(middleName);

//2) мы можем устанавливать дефолтное значение

// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// 	message: 'Hello world',
// };

// const { firstName, message, role = 'Admin' } = employee;
// console.log(role);//Admin

// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// 	message: 'Hello world',
// 	role: 'user',
// };

// const { firstName, message, role = 'Admin' } = employee;
// console.log(role);//user

//3) ситуация когда зарезервировано название переменной

// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// 	message: 'Hello world',
// 	role: 'user',
// };

// const firstName = 'Natasha';

// const { firstName: name, message, role = 'Admin' } = employee;

// console.log(firstName);
// console.log(name);

//4) вложенные структуры

// const employee = {
// 	firstName: 'Ivan',
// 	lastName: 'Ivanov',
// 	middleName: 'Ivanovich',
// 	message: 'Hello world',
// 	permission: {
// 		canEdit: true,
// 		canDelete: false,
// 		role: 'user',
// 		app: {
// 			someApp: 'Hello  my first app!',
// 		},
// 	},
// };
//три уровня вложенности
// const {
// 	firstName,
// 	permission: {
// 		canDelete,
// 		canEdit,
// 		app: { someApp },
// 	},
// } = employee;

// console.log(canDelete);
// console.log(canEdit);
// console.log(someApp);

// const {
// 	permission: { app },
// } = employee;

// const secondAppLication = app.someApp;
// console.log(secondAppLication);

//5) деструктуризация массива

// const colors = ['red', 'blue', 'green', 'white', 'black'];
// const [redColor, blueColor] = colors;
// console.log(redColor);
// console.log(blueColor);

//пропуск значений

// const colors = ['red', 'blue', 'green', 'white', 'black'];
// const [redColor, blueColor, , , blackColor] = colors;
// console.log(blackColor);

//дефолтные значения

// const colors = ['red', 'blue', , 'white', 'black'];

// const [redColor, blackColor, noValue = 'No value'] = colors;
// console.log(noValue);

//вложенные массивы

// const colors = ['red', ['blue', 'purple'], 'green', 'white', 'black'];

// const [redValue, [blueColor, purpleColor]] = colors;
// console.log(blueColor);
// console.log(purpleColor);
///////////////////////////////////////!!!!!!!!!!!!!!
//Второй урок
//push,pop,shift,unshift - мутабильные === изменяют(мутируют) исходный массив

//push()
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.push('Monika');
// console.log('names:', names);
// console.log('new length:', result);

//pop()
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.pop();
// console.log('names:', names);
// console.log('deleted item:', result);

//shift
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.shift();
// console.log('names:', names);
// console.log('deleted item:', result);

//unshift
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.unshift('milki');
// console.log('names:', names);
// console.log('new length:', result);

//reverse()-меняет порядок элемент в массива на обратный Мутирует исходный массив
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// names.reverse();
// console.log('names:', names);

//split() - метод для работы со строками

//1) разделим строку по разделителю "-"
// const str = 'ab-cd-ef';
// const res = str.split('-');
// console.log('str:', str);
// console.log('res:', res);

//2) второй параметр в split

// const str = 'ab-cd-ef';
// const res = str.split('-',2);
// console.log('str: ', str);
// console.log('res: ', res);

// //3) split("")
// const str = 'ab-cd-ef';
// const res = str.split();
// console.log('str: ', str);
// console.log('res: ', res);

//4) split("") - ничего не передаем
// const str = 'ab-cd-ef';
// const res = str.split();
// console.log('str: ', str);
// console.log('res: ', res);

//join()-метод массива

// //1) разделитель передаем в join("-")
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.join('-')
// console.log(result);

//2)join("")- ничего не передаем
// const names = ['Alex', 'Bod', 'Ivan', 'Sasha'];
// const result = names.join('')
// console.log(result);

//concat()-не мутирует исходный массив

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const nestedArr = [
// 	[5, 6],
// 	[7, 8],
// 	[9, 10],
// ];
// const res = arr1.concat(arr2, nestedArr);

// const testExample = res.flat();
// const rmSecondNested = res.flat(2);
// const rmAllNested = res.flat(Infinity);
// console.log(res);
// console.log('удаляем один уровень вложености', rmSecondNested);
// console.log('указали двойковой что два уровня вложености убираем', testExample);
// console.log('убрали все уровни вложености', rmAllNested);

//indexOf()

//найдем позицию тройки indexOf()
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const res = numbers.indexOf(3); // если не задать елемент то вернет -1
// console.log(res);

// const numbers = [1, 2, 3, 3, 4, 3, 5, 6, 7];
// const res = numbers.indexOf(4);
// console.log(res);

//lastIndexOf()
//найти позицию слова
// const numbers = ['one', 'two', 'three'];
// const res = numbers.lastIndexOf('two');
// console.log(res);

//find()
// const words = ['spray', 'elite', 'present', 'spray', 'elite'];
// const res = words.find(function (element) {
// 	return element.length > 6;
// });
// console.log(res);

//findIndex()
// const arr = [1, 2, 3, 4, 5];
// const res = arr.findIndex((el) => el % 2 == 0);
// console.log(res);//первый попавший index

//findLastIndex()
// const arr = [1, 2, 3, 4, 5];
// const res = arr.findLastIndex((el) => el % 2 == 0);
// console.log(res);

//includes()
// const words = ['spray', 'elite', 'present', 'spray', 'elite'];
// const res = words.includes('spray');
// console.log(res);//true

//filter()-не мутирует исходный массив
// const words = ['spray', 'elite', 'present', 'spray', 'elite'];
// const res = words.filter((words) => words. length > 6);
// console.log(res);

//sort()
//1) сортирует из коробки без доп параметров
// const words =['spray', 'elite', 'present'];
// const res = words.sort();
// console.log(res);
//2) работает мутабельно
// const words =['spray', 'elite', 'present'];
//  words.sort();
// console.log(words);

//slice, splice. toSpliced(), reduse

//slice() - иммутабельным
//1) expected: ['a','b']
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const sub = arr.slice(0, 2); //не включительно по второй индекс(второй параметр не обязателеный)
// console.log(sub);
//2) с одним параметром в slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.slice(1)
// console.log(res);
//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.slice(1, -1);
// console.log(res);

//splice() - мутабельный

//массив splice(откуда удаляем сколько удаляем [вставить],[вставить]...)
//1) удаление элементов
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 3);
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const result = arr.splice(1, 0, '2', '3', 'test');
// console.log(arr);

//  let arr = ['a', 'b', 'c', 'd', 'e'];
//  const result = arr.splice('a', '2', '3', 'test');
//  console.log(arr);

//toSpliced()- иммутабельно
// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const months2 = months.toSpliced(1, 0, 'Feb');
// const months3 = months.toSpliced(1, 0, 'Feb');
// console.log(months);
// console.log(months2);
// console.log(months3);

//reduse()
// let arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, el) => {
// 	console.log('acc',acc);
// 	console.log('el',el);
// 	return acc + el;
// },0);
// console.log(result);

// const fruits = [
// 	{ name: 'apple', guantity: 2 },
// 	{ name: 'banana', guantity: 3 },
// 	{ name: 'orange', guantity: 1 },
// ];
// const result = fruits.reduce((acc, fruits) => {
// 	console.log('fruit', fruits);
// 	return acc + fruits.guantity;
// }, 0);
// console.log('result', result);

// const peoples = [
// 	{ name: 'Vika', age: 25, budget: 4500 },
// 	{ name: 'Viktar', age: 40, budget: 5500 },
// 	{ name: 'Visik', age: 55, budget: 6500 },
// 	{ name: 'Viktoria', age: 35, budget: 7500 },
// ];
// const result = peoples.reduce(
// 	(acc, el) => {
// 		acc.totalNames.push(el.name);
// 		return acc;
// 	},
// 	{ totalNames: [] }
// );
// console.log('result', result);

// const words = ['Hello', ' ', 'world', '!'];
// const result = words.reduce((acc, words) => {
// 	return acc + words;
// }, '');
// console.log('result', result);

// const peoples = [
// 	{ name: 'Vika', age: 25, budget: 4500 },
// 	{ name: 'Viktar', age: 40, budget: 5500 },
// 	{ name: 'Visik', age: 55, budget: 6500 },
// 	{ name: 'Viktoria', age: 35, budget: 7500 },
// ];
// const mapp = peoples.map((person) => ({
// 	name: person.name,
// 	age: person.age,
// }));

// const result = {
// 	totalNames: mapp.map((person) => person.name),
// 	totalAges: mapp.reduce((acc, el) => acc + el.age, 0),
// };
// console.log(result);

//статические свойства - определеяем при создание объекта

// let fruit = {
// 	color: 'Red',
// 	taste: 'yuumy',
// };
// console.log(fruit.color);
// console.log(fruit.taste);

// function createObj(key, value) {
// 	let newObj = {};
// 	newObj[key] = value;
// 	return newObj;
// }
// createObj('car', 'Audi');
// console.log(createObj('car', 'Audi'));

// let properTyName = 'age';
// const person = {
// 	name: 'Adam',
// 	[properTyName]: 30,
// };
// console.log(person);

// let index = 3;
// const obj = {
// 	[index + 3]: 'four',
// };
// console.log(obj);

// const obg = {
// 	['age' + 2]: 32,
// 	[2 + 2]: '4',
// };
// console.log(obg);

// function createObg(key, value) {
// 	return {
// 		[key.toUpperCase()]: value,
// 	};
// }
// console.log(createObg('car', 'bmw'));

// const drivers = [
// 	{ name: 'pavel', status: 'ready' },
// 	{ name: 'pav', status: 'read' },
// 	{ name: 'pave', status: 'rea' },
// ];
// const result = drivers.map((driver) => {
// 	const { status } = driver;
//     return[status]
// });
// console.log(result);
