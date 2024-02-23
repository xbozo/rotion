import { Route, Router } from 'electron-router-dom'
import { Blank } from './pages/blank'
import { DefaultLayout } from './pages/layout/default'

export const Routes = () => {
  return (
    <Router
      main={
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Blank />} />
        </Route>
      }
    />
  )
}
