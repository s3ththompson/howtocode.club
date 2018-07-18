var html = require('choo/html')

var TITLE = 'How To Code - Livestream'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <iframe
        src="https://player.twitch.tv/?channel=s3ththompson"
        class="psa t0 l0 r0 b0 h100 w100"
        height="378"
        width="620"
        controls="false"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true" >
      </iframe>
    </body>
  `
}
