var mongo = require('mongodb').MongoClient;

var age = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  var collection = db.collection('parrots');
  collection.count({age: {$gt:+age}}, function(err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  });
});
