
const initOptions = { /* initialization options */ }
const pgp = require('pg-promise')(initOptions)

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'gamepark-reservation',
  user: 'postgres',
  password: 'docker'
})

test('should insert scheduledreservation entry', async (done) => {
  let client
  try {
    client = await db.connect()
    await client.none(`INSERT INTO 
    public.scheduledreservation(starttime, entrytime, complete, players, game) 
    VALUES($<res.starttime>, $<res.entrytime>, $<res.complete>, $<res.players>, $<res.game>)`, {
      res: {
        starttime: Date.now(),
        entrytime: Date.now(),
        complete: true,
        players: ['Donald', 'Daisy'],
        game: 'Asteroid'
      }
    })
  } catch (error) {
    console.log(error)
  } finally {
    client.done(true)
    done()
  }
})
