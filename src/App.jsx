import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import routes from 'shared/libs/routes/routes'
import ProtectedRoute from 'shared/templates/ProtectedRoute'
import { RootProvider } from 'store'
import {
  Items,

} from './pages'
import 'react-toastify/dist/ReactToastify.css'
import 'assets/scss/reset.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <RootProvider>
          <Switch>
            <Route exact path={routes.items} component={Items} />
            <Route component={Items} />
          </Switch>
        </RootProvider>
      </BrowserRouter>
    </>
  )
}

export default App
