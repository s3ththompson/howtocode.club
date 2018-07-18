var html = require('choo/html')
var css = require('sheetify')

var page = require('./partials/page')

var TITLE = 'How To Code'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var subscribe = (state.query.subscribe == 'success') ? html`<p class="c-red">Subscribed!</p>` : html`<form class="mb1" action="https://jumprock.co/mail/howtocode" method="post">
    <input type="text" name="trapit" value="" style="display:none">
    <input class="w50 dib" type="text" name="email" placeholder="Email Address" required />
    <input type="hidden" name="after" value="https://howtocode.club/?subscribe=success">
    <input class="c-blue" type="submit" value="Subscribe" />
  </form>`

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
    <h3 class="c-gray">Schedule <span class="c-red">[Beta session]</span></h3>
      <ol start=0>
        <li>
          Introduction → <a href="/intro">notes</a>, <a href="/tools">tools</a>
        </li>
        <li>
          Hypertext → July 16, 6:30pm ET, <a href="/hypertext">notes</a>,  <a href="/archive">video</a>
        </li>
        <li>
          Style → July 23, 6:30pm ET
        </li>
        <li>
          Script I → July 30, 6:30pm ET
        </li>
        <li>
          Script II → August 6, 6:30pm ET
        </li>
        <li>
          Frameworks → TBA
        </li>
        <li>
          Introspection → TBA
        </li>
        <li>
          Beyond → TBA
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
    <h3 class="c-gray">Subscribe for Updates</h3>
    ${subscribe}
    <h3 class="c-gray">Colophon</h3>
    <p class="mb0">Course taught by <a href="https://seththompson.org">Seth Thompson</a> (<a href="mailto:s3ththompson@gmail.com">s3ththompson@gmail.com</a>) and friends.</p>
    <p class="mb0">Cover design inspired by <span class="fsi">How to See</span> by <a href="https://www.theparisreview.org/blog/2016/09/19/quotable-david-salle/">David Salle</a>.</p>
    <p>Anonymous <a href="/feedback">feedback</a> appreciated and encouraged.</p>
  </div>`

  return page(content, state)
}
