const { Router } = require('express')
const bodyParser = require('body-parser')
const { insertReservation } = require('./instantReservationDataAccess')

const jsonParser = bodyParser.json()

exports.instantReservationRoutes = Router()
  .post('/instant-reservations', jsonParser, async (req, res) => {
    try {
      await insertReservation(req.body)
      res.status(201).end()
    } catch (error) {
      res.status(500).send({
        message: error.message,
        stacktrace: error.stacktrace
      })
    }
  })
