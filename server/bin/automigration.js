 // automigration.js to creates a database schema based on application’s models

var app = require ('../server');

var dataSource=app.datasources.postgres;

// automigrate for the models
dataSource.automigrate('problems',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('orders',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('locations',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('vehiclesType',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('solution',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('route',function (err) {
if (err) throw err;
dataSource.disconnect();
});

dataSource.automigrate('visits',function (err) {
if (err) throw err;
dataSource.disconnect();
});
