// const mongoClient = require('mongodb');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const mongoConnect = callback => {
//   MongoClient.connect(
//     'mongodb://localhost:27017/AuthDB'
//   )
//     .then(client => {
//       console.log('Connected!');
//       callback(client);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// module.exports = mongoConnect;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 const mongoConnect=callback =>{
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
//   client.close();
});
 }
 module.exports=mongoConnect;