var html = require('choo/html')

var videoStore = require('../stores/video')

var TITLE = 'How To Code - Video Archive'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var videos = [
    {
      title: '1: Hypertext',
      date: 'July 16, 2018',
      length: '01:26',
      notes: '/hypertext',
      thumb: '/assets/img/video-hypertext.jpg',
      url: 'https://how-to-code.s3.amazonaws.com/hypertext.mp4'
    }
  ]

  var video = videos[state.video.index]

  var content = videos.map((video, i) => {
    return html`<div class="c12 x xjb mb1">
      <div class="c3 pr1">
        <img class="mx100" src="${video.thumb}">
      </div>
      <div class="c9">
        <h3 class="c-gray mb0">${video.title} (${video.length})</h3>
        <p>${video.date}</p>
        <p><button class="c-blue" onclick=${play}>play</button>, <a href="${video.notes}">notes</a></p>
      </div>
    </div>`

    function play () {
      videoStore.actions.play(i)
    }
  })

  return html`<body class="ff-sans x xjb">
      <div class="dn sm-db s2 vh100 bgc-darkgray psf">
        <header class="c-blue x xjc xac h100">
          <video controls poster="${video.thumb}" class="db w100 p1" >
            <source
              src="${video.url}"
            type="video/mp4">
          </video>
        </header>
        <h2 class="psa t0 r0 l0 m1 c-gray tac">${video.title} (${video.length})</h2>
        <h2 class="psa b0 r0 l0 m1 c-gray tac"><a class="c-white" href="/">Home</a></h2>
      </div>
      <div class="s1 sm-s2 vh100 psf r0 psn">
        <div class="os h100 p1">
          <div class="sm-dn c-blue mb1">
            <span class="db"><span class="c-red">2.</span> to</span>
            <span class="db"><span class="c-red">1.</span> How</span>
            <span class="db"><span class="c-red">3.</span> Code</span>
          </div>
          <video controls poster="${video.thumb}" class="sm-dn db w100 sm-p1 pb1" >
            <source
              src="${video.url}"
            type="video/mp4">
          </video>
          ${content}
        </div>
      </div>
    </body>`
}
