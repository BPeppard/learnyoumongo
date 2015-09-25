var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];
//console.log(process.argv);
var nameData = {firstName: firstName, lastName: lastName};

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  var docs = db.collection('docs');
  docs.insert(nameData, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(nameData));
    db.close();
  });
});
