const mongoose = require('mongoose');

function connection() {
  mongoose
    .connect(
      'mongodb+srv://test:teste@clustereshop.oybxl.mongodb.net/nutrifood?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'nutrifood-database',
      }
    )
    .then(() => {
      console.log('Conectado ao mongoDB');
    })
    .catch((err) => console.error(err));
}

module.exports = connection;
