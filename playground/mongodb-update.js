const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndupdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b2a29dd219479fd311ea00e')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: true 
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2a4030219479fd311ea388')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'tanmay'
    }
  }, {
    returnOriginal: false 
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
