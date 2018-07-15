var css = require('sheetify')
var choo = require('choo')

css('ress')
css('./assets/css/css.js')
css('./assets/css/base.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.route('/', require('./views/main'))
app.route('/intro', require('./views/intro'))
app.route('/404', require('./views/404'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
