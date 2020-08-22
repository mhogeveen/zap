import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import Auth0ProviderWithHistory from '../auth0-provider-with-history'

import Navbar from './Navbar'

const App = () => {
   return (
      <>
         <Router history={history}>
            <Auth0ProviderWithHistory>
               <Navbar />
               <Switch>
                  <Route exact path='/'>
                     <div>Home</div>
                  </Route>
                  <Route path='/dashboard'>
                     <div>Dashboard</div>
                  </Route>
                  <Route path='/projects'>
                     <div>Projects</div>
                  </Route>
                  <Route path='/labels'>
                     <div>Labels</div>
                  </Route>
               </Switch>
            </Auth0ProviderWithHistory>
         </Router>
      </>
   )
}

export default App
