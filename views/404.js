var html = require('choo/html')

var page = require('./partials/page')

var TITLE = 'How To Code - 404'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = html`<h3 class="c-red">404 Not Found</h3>`

  return page(content, state)
}
