var createStore = require('choo-store')

module.exports = createStore({
  storeName: 'slides',
  initialState: {
    index: 0,
   },
  events: {
    DOMContentLoaded: ({ store, state, emitter, data}) => {
      document.onkeydown = checkKey

      function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
           emitter.emit('slides:last')
        }
        else if (e.keyCode == '39') {
           emitter.emit('slides:next')
        }
      }

      if (state.query.slide) store.index = state.query.slide
      emitter.emit('render')

    },
    next: ({ store, emitter, data }) => {
      store.index++
      emitter.emit('replaceState', `/hypertext?slide=${store.index}`)
    },
    last: ({ store, emitter }) => {
      if (store.index > 0) store.index--
      emitter.emit('replaceState', `/hypertext?slide=${store.index}`)
    }
  }
})
