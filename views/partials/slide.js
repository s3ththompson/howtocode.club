var html = require('choo/html')

var icon = require('../../elements/textIcon')
var lastIcon = require('../../elements/lastIcon')
var nextIcon = require('../../elements/nextIcon')

var slides = require('../../stores/slides')

module.exports = function (slide, state) {
  return html`
    <body class="ff-sans bgc-offwhite">
      <div class="psf r0 t0 p1"><a href="${state.href}">${icon()}</a></div>
      <div class="x xjc xac vhmn100">
        <div class="vw50">
          ${slide}
        </div>
      </div>
      <div class="psf l0 b0 p1"><button onclick=${slides.actions.last}>${lastIcon()}</button></div>
      <div class="psf r0 b0 p1"><button onclick=${slides.actions.next}>${nextIcon()}</button></div>
    </body>
  `
}
