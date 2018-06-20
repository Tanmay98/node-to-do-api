const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
//   db.collection('Todos').find({
//     _id: new ObjectID('5b2a29dd219479fd311ea00e')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   },(err) => {
//     console.log('unable to fetch Todos');
//   });
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  },(err) => {
    console.log('unable to fetch Todos');
  })
  // db.close();
});
