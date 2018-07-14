var html = require('choo/html')

var TITLE = 'how-to-learn - route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="ff-sans x xjb">
      <div class="s2 vh100 bgc-offwhite psf">
        <header class="c-blue x xjc xac h100">
          <a href="/">
            <div>
              <h1 class="dn">2. to 1. How 3. Code</h1>
              <span class="db title"><span class="c-red">2.</span> to</span>
              <span class="db title"><span class="c-red">1.</span> How</span>
              <span class="db title"><span class="c-red">3.</span> Code</span>
            </div>
          </a>
        </header>
        <h2 class="psa t0 r0 l0 m1 c-gray tac">An opinionated approach to making websites.</h2>
        <h2 class="psa b0 r0 l0 m1 c-gray tac">Beta session starts Monday, July 16, 2018.</h2>
      </div>
      <div class="s2 vh100 psf r0 psn">
        <div class="os h100 p1">
          <h3 class="c-red">404 Not Found</h3>
        </div>
      </div>
    </body>
  `
}
