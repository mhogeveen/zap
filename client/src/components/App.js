import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import Auth0ProviderWithHistory from '../auth0-provider-with-history'

import Navbar from './Navbar'

const App = () => {
   return (
      <>
         <Auth0ProviderWithHistory>
            <Navbar />
         </Auth0ProviderWithHistory>

         <Router history={history}>
            <Switch>
               <Route exact path='/'>
                  <div>Home</div>
               </Route>
               <Route path='/dashboard'>
                  <div>Dashboard</div>
               </Route>
            </Switch>
         </Router>
      </>
   )
}

export default App
