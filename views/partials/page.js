var html = require('choo/html')

var icon = require('../../elements/slideIcon')

module.exports = function (content, state) {

  var slidePage = (Array.isArray(content))

  return html`
    <body class="ff-sans x xjb">
      <div class="dn sm-db s2 vh100 bgc-offwhite psf">
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
        <h2 class="psa b0 r0 l0 m1 c-gray tac">${state.href == '' ? 'Beta session starts Monday, July 16, 2018.' : html`<a href="/">Home</a>`}</h2>
      </div>
      <div class="s1 sm-s2 vh100 psf r0 psn">
        ${slidePage ? html`<div class="psf r0 t0 p1"><a href="${state.href}?slide=0">${icon()}</a></div>` : ''}
        <div class="os h100 p1">
          <div class="sm-dn c-blue mb1">
            <span class="db"><span class="c-red">2.</span> to</span>
            <span class="db"><span class="c-red">1.</span> How</span>
            <span class="db"><span class="c-red">3.</span> Code</span>
          </div>
          ${content}
        </div>
      </div>
    </body>
  `
}
