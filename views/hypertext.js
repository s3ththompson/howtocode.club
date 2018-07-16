var html = require('choo/html')

module.exports = view

function view (state, emit) {

  console.log(state)

  var slides = [
    html`<div class="c-blue mb1">
        <span class="db"><span class="c-red">2.</span> to</span>
        <span class="db"><span class="c-red">1.</span> How</span>
        <span class="db"><span class="c-red">3.</span> Code</span>
      </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>1. The website is functional.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>2. The website is accessible.</p>
      <p>The website is usable by as many people as possible, whatever their hardware, software, language, culture, location, or physical or mental ability</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>3. The website is fast.</p>
      <p>The website conserves the user’s data and time.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>4. The website is maintainable.</p>
      <p>The website can be easily modified, upgraded, and adapted to changing requirements, content, and technologies..</p>
      <p>The website can be passed on to other maintainers and contributors.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>5. The website is resilient.</p>
      <p>The website is designed to last far into the future as technologies and infrastructure change around it.</p>
      <p>The website relies on the fewest possible externalities.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>6. The website is beautiful.</p>
      <p>The website is designed with creativity, care, and good craft.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>7. The website is open.</p>
      <p>The website is free.</p>
      <p>The website does not rely on proprietary software.</p>
      <p>The website allows users and developers the right to modify, study, redistribute, and improve the code.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>8. The website is humane.</p>
      <p>The website contributes to the user’s well-being</p>
      <p>The website safeguards the user’s data, privacy, and sometimes anonymity.</p>
      <p>The website does not track the user.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      <p>9. The website is functional.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">How do Websites work?</h3>
    </div>`,
    html`<div>
      <h3 class="c-gray">How do Websites work?</h3>
      <ol>
        <li>1. Type in a Uniform Resource Locator (URL), such as google.com.</li>
        <li>2. Browser makes a Domain Name System (DNS) lookup to find the IP address associated with the URL.</li>
        <li>3. The IP address is a unique “name” for a computer (or server) which identifies it on the internet</li>
        <li>4. The browser creates a connection to the server on port 80 (the default port).</li>
        <li>5. Following the Hypertext Transfer Protocol (HTTP) protocol, the browser sends a GET request to the server asking for the file at the address.</li>
        <li>6. The server sends the Hypertext Markup Language (HTML) text for the web page to the browser.</li>
        <li>7. The browser reads the HTML tags. If it encounters any images or references to other files necessary to display the page, it initiates similar requests for those resources.</li>
        <li>8. The browser displays the page to the user.</li>
      </ol>
    </div>`,
    html`<div>
      <h3 class="c-gray">What is HTML?</h3>
      <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript).</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What is HTML?</h3>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Documentation</a></p>
    </div>`
  ]


  return html`
    <body class="ff-sans bgc-offwhite x xjc xac vhmn100">
      <div class="vw50">
        ${slides[state.slides.index]}
      </div>
    </body>
  `
}
