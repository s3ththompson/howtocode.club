var html = require('choo/html')

var page = require('./partials/page')

var TITLE = 'How To Code - Feedback'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var feedback = (state.query.submit == 'success') ? html`<p>Feedback submitted anonymously, thank you!</p>` : html`<form class="mb1" action="https://jumprock.co/mail/howtocodefeedback" method="post">
    <input type="text" name="trapit" value="" style="display:none">
    <input class="db w100" type="text" name="subject" placeholder="Subject">
    <textarea class="db w100 vhmn50" name="message" placeholder="Message here..." required></textarea>
    <input type="hidden" name="after" value="https://howtocode.club/feedback?submit=success">
    <input class="c-blue" type="submit" value="Submit" />
  </form>`

  var content = html`<div>
    <h3 class="c-red">Anonymous Feedback</h3>
    ${feedback}
  </div>`

  return page(content, state)
}
