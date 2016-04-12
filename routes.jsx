import React from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/app.jsx'
import PageA from './components/page-a.jsx'
import PageB from './components/page-b.jsx'
import Subpage from './components/subpage.jsx'
import NoMatch from './components/no-match.jsx'

// var browserHistory
// if (typeof(window) !== 'undefined') {
//     browserHistory = createBrowserHistory()
// }
// else {
//     browserHistory = createMemoryHistory()
// }

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="page-a" component={PageA} />
      <Route path="page-b" component={PageB}>
        <Route path="/subpage/:data" component={Subpage} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
)

export default routes
