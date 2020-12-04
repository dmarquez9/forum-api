const isLocal = !['Test', 'Production'].includes(process.env.NODE_ENV)
const folder =  !isLocal ? 'build' : 'src';
const format = !isLocal ? 'js' : 'ts';

module.exports = {
  "type": process.env.DB_CONNECTION || 'postgres',
  "host": process.env.DB_HOSTNAME,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "migrations": [`${folder}/migration/**/*.${format}`],
  "entities":  [`${folder}/entity/**/*.${format}`],
  "subscribers": [`${folder}/subscriber/**/*.${format}`],
  "factories": [`${folder}/factories/**/*.${format}`],
  "seeds": [`${folder}/seeds/**/*.${format}`],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}