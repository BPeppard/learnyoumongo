var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];
var collectionName = process.argv[3];
var removeId = process.argv[4];

mongo.connect('mongodb://localhost:27017/'+dbName, function(err, db) {
  var collection = db.collection(collectionName);
  collection.remove({_id: removeId}, function(err, data) {
    if (err) throw err;
    db.close();
  });
});
