import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import Auth0ProviderWithHistory from '../auth0-provider-with-history'

import Navbar from './Navbar'

const App = () => {
   return (
      <>
         <Navbar />
         <Router history={history}>
            <Auth0ProviderWithHistory>
               <Switch>
                  <Route exact path='/'>
                     <div>Home</div>
                  </Route>
                  <Route path='/dashboard'>
                     <div>Dashboard</div>
                  </Route>
               </Switch>
            </Auth0ProviderWithHistory>
         </Router>
      </>
   )
}

export default App
