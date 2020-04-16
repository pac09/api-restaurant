const MongoClient = require('mongodb').MongoClient;

module.exports = function(context, req) {
  MongoClient.connect(
    "mongodb://restaurant:JHrGgf1lp5v3aZYS1NY3V9G4Gb5MFFaN8B47HsHs2lvPsKluZ2iiC3mWlgU0ozE9Jxr4Q7qRFC63pLMA9HLk7w%3D%3D@restaurant.mongo.cosmos.azure.com:10255/?ssl=true&appName=@restaurant@", function (err, cli) {
      cli.close();
    },
    (err, database) => {
      if (err) 
        throw err;
      
      console.log('Connected succesfully');
      const db = database.db('restaurant');

      db.collection('orders')
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          
          context.res = {
            status: 200,
            body: result
          };
          database.close();
          context.done();
        });
    });
};
