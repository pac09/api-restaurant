const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {
  MongoClient.connect("mongodb://restaurant:JHrGgf1lp5v3aZYS1NY3V9G4Gb5MFFaN8B47HsHs2lvPsKluZ2iiC3mWlgU0ozE9Jxr4Q7qRFC63pLMA9HLk7w%3D%3D@restaurant.mongo.cosmos.azure.com:10255/?ssl=true&appName=@restaurant@", function (err, cli) {
    cli.close();
},
(err, database) => {
  if (err) 
        throw err;

  var db = database.db('restaurant');

  db.collection('orders')
    .findOneAndDelete({ id: context.req.params.id },
      (err, result) => {
        if (err) throw err;
        
        context.res = {
            body: order
        };

        database.close();
        context.done();
    });
  });
  // const query = client => {
  //   const db = client.db('restaurant');
  //   db.collection('orders')
  //     .findOneAndDelete({ id: context.req.params.id })
  //     .then(res => {
  //       context.res = {
  //         status: 200,
  //         body: { message: 'Order deleted successfully!' }
  //       };
  //       context.done();
  //     })
  //     .catch(err =>
  //       function(status, err, context) {
  //           context.res = { status: status, body: err };
  //           context.done();
  //       });
  // };
};