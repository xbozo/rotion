import { Route, Router } from 'electron-router-dom'
import { Document } from './pages/document'
import { DefaultLayout } from './pages/layout/default'

export const Routes = () => {
  return (
    <Router
      main={
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Document />} />
        </Route>
      }
    />
  )
}
