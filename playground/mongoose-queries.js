const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b2e227f709c4a3743d1171efg';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID is not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => console.log('todos', todos));

// Todo.findOne({
// 	_id: id
// }).then((todos) => console.log('todos', todos));

// Todo.findById(id).then((todos) => {
// 	if(!todos) {
// 		return console.log('Id not found');
// 	}
// 	console.log('todos by Id', todos)
// }).catch((e) => console.log('', e));

var id = '5b2b31cf4c06602b827f285b';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('user not found');
	}
	console.log('User by Id', user)
}).catch((e) => console.log(e));

