// FIXME pg initialization options
const initOptions = {}
const pgp = require('pg-promise')(initOptions)

// FIXME database options
const dbOptions = {
  host: 'localhost',
  port: 5432,
  database: 'gamepark-reservation',
  user: 'postgres',
  password: 'docker'
}
const db = pgp(dbOptions)

exports.execute = async function execute (task) {
  let client
  try {
    client = await db.connect()
    await task(client)
  } catch (error) {
    if (client) client.done()
    throw error
  }
}
