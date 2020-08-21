import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import Navbar from './Navbar'

const App = () => {
   return (
      <>
         <Navbar />
         <Router history={history}>
            <Switch>
               <Route exact path='/'>
                  <div>App</div>
               </Route>
            </Switch>
         </Router>
      </>
   )
}

export default App
