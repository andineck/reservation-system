import React from 'react'
import { useRoutes, A } from 'hookrouter'
import { IndexPage } from './pages/IndexPage'
import { ImmediateReservationPage } from './pages/ImmediateReservation'
import { NotFound } from './pages/NotFound'
import './pages/App.sass'

const routes = {
  '/': () => <IndexPage />,
  '/play-now': () => <ImmediateReservationPage />
}

export const Routes = () => {
  const routeResult = useRoutes(routes)

  return (
    <div>
      <h1>Reservation System</h1>
      <button className='button'><A href='/play-now'>Play Now</A></button>
      <button className='button'><A href='/'>Schedule</A></button>
      {routeResult || <NotFound />}
    </div>
  )
}
