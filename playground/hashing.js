const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashed_password = '$2a$10$JB6sEja6REiOtBU8A97Rn.9Fh9RwPlxsXRRfTUn2Mh87nQhZ2EhfO';

bcrypt.compare(password, hashed_password, (err, res) => {
	console.log(res);
});

// var data = {
// 	id:10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
// var message = 'hey niks';
// var hashed_mesage = SHA256(message).toString();

// console.log('message:' + message);
// console.log('hashed_mesage:' + hashed_mesage);

// var data = {
// 	id: 4
// }

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if(resultHash === token.hash){
// 	console.log('Data was not changed');
// }else{
// 	console.log('data was changed');
// }