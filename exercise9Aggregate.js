var mongo = require('mongodb').MongoClient;

var size = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  var collection = db.collection('prices');
  collection.aggregate([
    {$match: {size: size}},
    {$group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    //console.log(results);
    //console.log(results[0].total);
    var total = Number(results[0].total).toFixed(2);
    console.log(total);
    db.close();
  });
});
