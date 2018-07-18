var createStore = require('choo-store')

module.exports = createStore({
  storeName: 'video',
  initialState: {
    index: 0
  },
  events: {
    play: ({ store, state, emitter, data}) => {
      store.index = data
      emitter.emit('render')
    }
  }
})
