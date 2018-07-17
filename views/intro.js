var html = require('choo/html')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - 0: Intro'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = [
    html`<div>
      <h3 class="c-red">0. Introduction</h3>
    </div>`,
    html`<div>
      <p>Learning how to code is only effective in pursuit of a specific goal.</p>
      <p>The breadth of the discipline is so great that the trying to attain a general, abstract understanding of code is rarely the most efficient way to learn.</p>
      <p>This class focuses on making websites, so the first assignment is to come up with the idea for a website that will motivate you to learn the necessary skills to bring it into existence.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 1: Decide on a project</h3>
      <p>Come to the first class with an idea for a website that you would like to build. Pick something technically simple, but rich in concept or creative direction. We will talk more together about what makes some websites simple to build and others more complex.</p>
    </div>`,
    html`<div>
      <p>Here are some examples of projects which use web design to highlight content in novel ways:</p>
      <div class="p2">
        <a href="https://newcomputers.group/ready2use.html" target="_blank"><img class="mx100" src="/assets/img/project-idea-new.jpg"></a>
        <p class="tac">An essay about computers</p>
      </div>
    </div>`,
    html`<div class="p2">
      <a href="http://fact.110west40th.com/" target="_blank"><img class="mx100" src="/assets/img/project-idea-fact.jpg"></a>
      <p class="tac">An archive for an out-of-print magazine</p>
    </div>`,
    html`<div class="p2">
      <a href="https://gt-walsheim.com/" target="_blank"><img class="mx100" src="/assets/img/project-idea-gt.jpg"></a>
      <p class="tac">A font specimen</p>
    </div>`,
    html`<div class="p2">
      <a href="http://ktown92.com/" target="_blank"><img class="mx100" src="/assets/img/project-idea-ktown.jpg"></a>
      <p class="tac">An interactive video documentary about the 1992 LA K-Town riots</p>
    </div>`,
    html`<div class="p2">
      <a href="http://justinsloane.com/" target="_blank"><img class="mx100" src="/assets/img/project-idea-sloane.jpg"></a>
      <p class="tac">A portfolio of individual work</p>
    </div>`,
    html`<div>
      <p>Here are some other resources for finding examples of interesting or innovative websites:</p>
      <p><a class="arrow" href="https://hoverstat.es/" target="_blank">Hover States</a></p>
      <p><a class="arrow" href="https://www.are.na/" target="_blank">Are.na</a></p>
      <p>Try to collect your own set of sites for inspiration. Think about why a certain site was designed the way that it was. How does the interactivity of the web page help or hurt an understanding of the contents?</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 2: Set up your developer environment</h3>
      <p>Ideally, the best computer for this class is a macOS or Linux laptop. If you are using a Windows machine, please see the additional Windows instructions at the bottom of the <a href="/tools">tools guide</a>.</p>
      <ol>
        <li>Install <a href="https://hyper.is/">Hyper</a> (a terminal)</li>
        <li>Install <a href="https://nodejs.org/en/">Node.js 10.6.0</a> (a JavaScript runtime)</li>
        <li>Install <a href="https://www.sublimetext.com/">Sublime Text 3</a> (a text editor) </li>
        <li>Install <a href="https://www.google.com/chrome/canary/">Chrome Canary</a> (a browser for developers) </li>
      </ol>
      <p>Spend some time familiarizing yourself with these tools and reading online about what they are used for (and perhaps their alternatives).</p>
      <p>Read the <a href="/tools">tools guide</a> to learn more.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Reading</h3>
      <p><a class="arrow" href="https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/" target="_blank">What Is Code?</a> by Paul Ford, <span class="fsi">Bloomberg Businessweek</span> (2015)</p>
    </div>`
  ]

  if (state.slides.show && state.slides.index > content.length - 1) emit('replaceState', state.href)
  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
