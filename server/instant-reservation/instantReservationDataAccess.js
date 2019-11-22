const { execute } = require('../lib/dataAccess')

/**
 * reservation example object:
 * {
 *  entrytime: Date.now(),
 *  complete: true,
 *  players: ['Donald', 'Daisy'],
 *  game: 'Asteroid'
 * }
 */
exports.insertReservation = async function insertReservation (reservation) {
  return execute(async (client) => {
    await client.none(`INSERT INTO public.instantreservation(
      entrytime, 
      complete, 
      players, 
      game) 
    VALUES(
      $<entrytime>, 
      $<complete>, 
      $<players>, 
      $<game>)`, reservation)
  })
}
