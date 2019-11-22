const express = require('express')
const Bundler = require('parcel-bundler')
const { instantReservationRoutes } = require('./server/instant-reservation/instantReservationRESTController')

const app = express()

app
  // REST API Routes
  .use(instantReservationRoutes)
  // web routes
  .use(new Bundler('./server/web/index.html').middleware())

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
