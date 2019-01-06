var html = require('choo/html')
var css = require('sheetify')

var page = require('./partials/page')

var TITLE = 'How To Code'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = html`<div>
    <h3 class="c-gray">Introduction</h3>
    <p>How to Code is a free summer course on making original, creative websites from scratch. Participants will learn how to use HTML, CSS, and JavaScript with a special emphasis on code style, debugging, and reading source.</p>
    <h3 class="c-gray">Who is this course for?</h3>
    <p>The course is for students adept at picking up technical skills with the right resources, patience, and assistance. No prior coding knowledege required.</p>
    <p>Students should have strong opinions about design, internet culture, artistic development, and professional ethics.</p>
    <h3 class="c-gray">Course Format</h3>
    <p>The class will meet once a week (usually on Monday nights). Lectures will be recorded and streamed for remote viewing.</p>
    <p>Class sessions will include a short lecture, group discussion, and review of individual projects.</p>
    <p>Students will be expected to spend time outside of class working on short assignments, continuing self-study, and completing an individual project.</p>
    <h3 class="c-gray">Schedule <span class="label">Beta session</span></h3>
      <ol start=0>
        <li>
          Introduction → <a href="/intro">notes</a>, <a href="/tools">tools</a>
        </li>
        <li>
          Hypertext → July 16, 6:30pm ET, <a href="/hypertext">notes</a>, <a href="/archive">video</a>
        </li>
        <li>
          Style → July 23, 6:30pm ET, <a href="/style">notes</a>, <a href="/archive">video</a>
        </li>
        <li>
          Script I → July 30, 6:30pm ET, <a href="/script-i">notes</a>, <a href="/archive">video</a>
        </li>
        <li>
          Script II → August 6, 6:30pm ET, <a href="https://github.com/s3ththompson/howtocode/tree/master/4-script-ii" target="_blank">code</a>, <a href="/archive">video</a>
        </li>
        <li>
          Script III (Slideshow I) → August 27, 6:30pm ET, <a href="/script-iii">notes</a>, <a href="/archive">video</a>
        </li>
        <li>
          Script IV (Slideshow II) → September 3, 6:30pm ET, <a href="https://github.com/s3ththompson/howtocode/tree/master/6-script-iv" target="_blank">code</a>, <a href="/archive">video</a>
        </li>
        <li>
          Frameworks → September 10, 6:30pm ET
        </li>
        <li>
          Introspection → September 17, 6:30pm ET
        </li>
        <li>
          Beyond → September 24, 6:30pm ET
        </li>
      </ol>
    <h3 class="c-gray">Location</h3>
    <div class="x xjb">
      <div class="s2 pr1">
        <h4 class="mb0">In Person:</h4>
        <address>
          180 York St.<br/>
          New Haven, CT 06511
        </address>
      </div>
      <div class="s2">
        <h4 class="mb0">Remote:</h4>
        <p class="mb0"><a href="/livestream">Live Stream</a></p>
        <p><a href="/archive">Video Archive</a></p>
      </div>
    </div>
    <h3 class="c-gray">Join the Chatroom</h3>
    <p>Join the discussion in the class Slack channel. Sign up <a href="http://chat.howtocode.club" target="_blank">here</a>, then head to: <a href="https://howtocodeclub.slack.com" target="_blank">howtocodeclub.slack.com</a></p>
    <h3 class="c-gray">Colophon</h3>
    <p class="mb0">Course taught by <a href="https://seththompson.org">Seth Thompson</a> (<a href="mailto:s3ththompson@gmail.com">s3ththompson@gmail.com</a>) and friends.</p>
    <p class="mb0">Cover design inspired by <span class="fsi">How to See</span> by <a href="https://www.theparisreview.org/blog/2016/09/19/quotable-david-salle/">David Salle</a>.</p>
    <p>Anonymous <a href="/feedback">feedback</a> appreciated and encouraged.</p>
  </div>`

  return page(content, state)
}
