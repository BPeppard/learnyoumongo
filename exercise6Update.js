var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];

mongo.connect('mongodb://localhost:27017/'+dbName, function(err, db) {
  var collection = db.collection('users');
  collection.update({username: 'tinatime'},
  {
    $set: {
      age: 40
    }
  }, function(err, data) {
    if (err) throw err;
    db.close();
  });
});
