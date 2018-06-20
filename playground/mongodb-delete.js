const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
// //delete many
//   db.collection('Todos').deleteMany({text: 'anime is good'}).then((result) => {
//     console.log(result);
//   });

// // delete one
//   db.collection('Todos').deleteOne({text:'hey bud'}).then((result) => {
//     console.log(result);
//   });
// findOneDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });  

    db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });
  // db.close();
});
