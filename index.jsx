import React from 'react'
import express from 'express'
import { RouterContext, match } from 'react-router'
import { renderToString } from 'react-dom/server'
import routes from './routes.jsx'

var app = express()
app.use(express.static('public'))
app.set('view engine', 'jade')
app.set('views', __dirname)
app.listen(3000, function () {
  console.log('App listening, port 3000')
})
app.get('*', (req, res)=> {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }
    if (error) {
      return res.status(500).send(error.message)
    }
    if (!renderProps) {
      return res.status(404).send('Not found')
    }

    let reduxState = escape(JSON.stringify({ foo: 'bar' }))
    let html = renderToString(<RouterContext {...renderProps} />)
    res.render('index', { html, reduxState, rootUrl: 'http://localhost:3000' })
  })

})
