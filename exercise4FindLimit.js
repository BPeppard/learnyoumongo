var mongo = require('mongodb').MongoClient;

var age = parseInt(process.argv[2]);
//console.log('age: '+age);

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  var parrots = db.collection('parrots');
  parrots.find({age: {$gt:age}}, {name:1, age:1, _id:0}, function(err, cursor) {

    cursor.toArray(function(err, documents) {
      console.log(documents);
      db.close();
    });
  });
});
