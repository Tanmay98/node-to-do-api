const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const{User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({text: 'hey boy'}).then((result) => {
	console.log(result);
});

// Todo.findByIdAndRemove({'some id'}).then((result) => {
// 	console.log(result);
// });