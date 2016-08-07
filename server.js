var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config');
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var match = ReactRouter.match;
var RouterContext = React.createFactory(ReactRouter.RouterContext);
var Provider = React.createFactory(require('react-redux').Provider);
import configureStore from './store/configureStore.js';
import rootReducer from './reducers';
import routes from './routes.js';
import createMemoryHistory from 'history/lib/createMemoryHistory';

var app = new (require('express'))()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('*', function(req, res) {
  const history = createMemoryHistory({location: req.url})
   let store = configureStore();
   let reduxState = JSON.stringify(store.getState());

   match({routes: routes, location: req.url, history}, function(error, redirectLocation, renderProps) {
     if (error) {
       res.status(500).send(error.message)
     } else if (redirectLocation) {
       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
     } else if (renderProps) {
       history.push('localhost:3000'+req.url);
       var html = ReactDOMServer.renderToString(
         Provider({store: store}, RouterContext(renderProps))
       )
       res.render('index', { html, reduxState });
     } else {
       res.status(404).send('Not found')
     }
   });
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
