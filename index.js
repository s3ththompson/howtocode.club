var css = require('sheetify')
var choo = require('choo')

css('ress')
css('./assets/css/css.js')
css('./assets/css/base.css')

var app = choo({
  hash: false
})

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('./stores/slides'))
app.use(require('./stores/video'))

app.route('/', require('./views/main'))
app.route('/livestream', require('./views/livestream'))
app.route('/archive', require('./views/archive'))
app.route('/feedback', require('./views/feedback'))
app.route('/tools', require('./views/tools'))
app.route('/intro', require('./views/intro'))
app.route('/hypertext', require('./views/hypertext'))
app.route('/style', require('./views/style'))
app.route('/404', require('./views/404'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
