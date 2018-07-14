var html = require('choo/html')

module.exports = view

function view (state, emit) {
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
          <h3 class="c-red">0. Introduction</h3>
          <p>Learning how to code is only effective in pursuit of a specific goal.</p>
          <p>The breadth of the discipline is so great that the pursuit of a general, abstract understanding of code is rarely the most efficient way to learn.</p>
          <p>This class focuses on making websites, so the first assignment is to come up with the idea for a website that you want to build.</p>
          <h3 class="c-gray">Assignment 1: Decide on a project</h3>
          <p>Come to the first class with an idea for a website that you would like to build. Pick something technically simple, but rich in concept or creative direction. We will talk more together about what makes some websites simple to build and others more complex.</p>
          <h3 class="c-gray">Assignment 2: Set up your developer environment</h3>
          <p>Ideally, the best computer for this class is a macOS or Linux laptop. Please let me know if you are using a different environment and I will develop separate instructions.</p>
          <ol>
            <li>1. Install <a href="https://hyper.is/">Hyper</a> (a terminal)</li>
            <li>2. Install <a href="https://nodejs.org/en/">Node.js 10.6.0</a> (a JavaScript runtime)</li>
            <li>3. Install <a href="https://www.sublimetext.com/">Sublime Text 3</a> (a text editor) </li>
            <li>4. Install <a href="https://www.google.com/chrome/canary/">Chrome Canary</a> (a browser for developers) </li>
          </ol>
          <p>Spend some time familiarizing yourself with these tools and reading online about what they are used for (and perhaps their alternatives).</p>
          <h3 class="c-gray">Reading</h3>
          <p>→ <a href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/">What Is Code?</a> by Paul Ford, <span class="fsi">Bloomberg Businessweek</span> (2015)</p>
        </div>
      </div>
    </body>
  `
}
