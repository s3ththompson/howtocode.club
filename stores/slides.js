var createStore = require('choo-store')

module.exports = createStore({
  storeName: 'slides',
  initialState: {
    index: 0,
    show: false
   },
  events: {
    setup: ({ store, state, emitter}) => {
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

      if (state.query.slide) {
        store.index = state.query.slide
        store.show = true
      } else {
        emitter.emit('slides:reset')
      }
      emitter.emit('render')
    },
    next: ({ store, state, emitter, data }) => {
      store.index++
      emitter.emit('replaceState', `${state.href}?slide=${store.index}`)
    },
    last: ({ store, state, emitter }) => {
      if (store.index > 0) store.index--
      emitter.emit('replaceState', `${state.href}?slide=${store.index}`)
    },
    DOMContentLoaded: ({ emitter }) => {
      emitter.emit('slides:setup')
    },
    navigate: ({ emitter }) => {
      emitter.emit('slides:setup')
    }
  }
})
