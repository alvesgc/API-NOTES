const sqliteConnection = require('../../sqlite');

const createUseres = require('./createUsers');

async function migrationsRun() {
  const schemas = [
    createUseres
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.log(error));
}

module.exports = migrationsRun;