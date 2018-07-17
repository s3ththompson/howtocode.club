var html = require('choo/html')

var ol = require('../elements/ol')
var Counter = require('../lib/counter')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - 1: Hypertext'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var c = new Counter()
  var c2 = new Counter()

  var content = [
    html`<div>
      <h2 class="c-red">1: Hypertext</h2>
    </div>`,
    html`<div>
      <h3 class="c-gray">What Makes a Good Website?</h3>
      ${ol(html`<p>The website is functional.</p>`, c.next())}
    </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is accessible.</p>`,
        html`<p>The website is usable by as many people as possible, whatever their hardware, software, language, culture, location, or physical or mental ability.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is fast.</p>`,
        html`<p>The website conserves the user’s data and time.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is maintainable.</p>`,
        html`<p>The website can be easily modified, upgraded, and adapted to changing requirements, content, and technologies.</p>`,
        html`<p>The website can be passed on to other maintainers and contributors.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is resilient.</p>`,
        html`<p>The website is designed to last far into the future as technologies and infrastructure change around it.</p>`,
        html`<p>The website relies on the fewest possible externalities.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is beautiful.</p>`,
        html`<p>The website is designed with creativity, care, and good craft.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is open.</p>`,
        html`<p>The website is free.</p>`,
        html`<p>The website does not rely on proprietary software.</p>`,
        html`<p>The website allows users and developers the right to modify, study, redistribute, and improve the code.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      ${ol([[
        html`<p>The website is humane.</p>`,
        html`<p>The website contributes to the user’s well-being.</p>`,
        html`<p>The website safeguards the user’s data, privacy, and sometimes anonymity.</p>`,
        html`<p>The website does not track the user.</p>`
        ]], c.next())}
      </div>`,
    html`<div>
      <h3 class="c-gray">How do Websites Work?</h3>
      ${ol(html`<p>Type in a Uniform Resource Locator (URL), such as google.com.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>Browser makes a Domain Name System (DNS) lookup to find the IP address associated with the URL.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>The IP address is a unique “name” for a computer (or server) which identifies it on the internet.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>The browser creates a connection to the server on port 80 (the default port).</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>Following the Hypertext Transfer Protocol (HTTP) protocol, the browser sends a GET request to the server asking for the file at the address.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>The server sends the Hypertext Markup Language (HTML) text for the web page to the browser.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>The browser reads the HTML tags. If it encounters any images or references to other files necessary to display the page, it initiates similar requests for those resources.</p>`, c2.next())}
      </div>`,
    html`<div>
      ${ol(html`<p>The browser displays the page to the user.</p>`, c2.next())}
      </div>`,
    html`<div>
      <h3 class="c-gray">What is HTML?</h3>
      <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript).</p>
    </div>`,
    html`<div>
      <p>The best way to learn about the usage of HTML elements is to read good documentation, such as the Mozilla Developer Network docs, maintained by a consortium of web browser vendors:</p>
      <p><a class="arrow" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Documentation</a></p>
    </div>`,
    html`<div>
      <p>Here is a short list of the most common HTML elements:</p>
      <p><a class="arrow" href="https://learnxinyminutes.com/docs/html/" target="_blank">Learn X in Y Minutes: HTML</a></p>
    </div>`,
    html`<div>
      <h3 class="c-gray">How should you learn HTML?</h3>
      <p>In general, you should get used to googling simple questions about code. Try these:</p>
      <ul>
        <li><a href="https://www.google.com/search?q=table+elements+mdn" target="_blank">"table elements mdn"</a> (Both of the first two results are relevant. <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics" target="_blank">HTML table basics | MDN</a> is a tutorial.)</li>
        <li><a href="https://www.google.com/search?q=how+to+use+html+sections+mdn" target="_blank">"how to use html sections mdn"</a> (<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines" target="_blank">Using HTML sections and outlines | MDN</a> is useful.)</li>
        <li><a href="https://www.google.com/search?q=images+html+mdn" target="_blank">"images html mdn"</a> (<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" target="_blank">Images in HTML | MDN</a> is essential reading.)</li>
      </ul>
      <p>I'm searching for simple questions with the "mdn" keyword because the MDN docs are the highest quality resource available.</p>
      <p>Feel free to consult other sites for HTML information, but stay away from <a class="c-red" href="https://www.w3schools.com/" target="_blank">W3 Schools</a> which usually appears high in search results but has a <a href="https://meta.stackoverflow.com/questions/280478/why-not-w3schools-com" target="_blank">history of showing outdated information</a>.</p>
    </div>`,
    html`<div>
      <p>One other important resource is Stack Overflow, an incredible question-and-answer site that will be a useful resource when you run into a specific issue or bug with your code:</p>
      <p><a class="arrow" href="https://stackoverflow.com/" target="_blank">Stack Overflow</a></p>
      <p>Their homepage isn't very useful, but you will often see Stack Overflow results in Google searches. Searching <a href="https://www.google.com/search?q=what+does+meta+charset%3D%22utf-8%22+mean" target="_blank">"what does meta charset="utf-8" mean"</a>, for example, yields this helpful <a href="https://stackoverflow.com/questions/29869743/what-is-meta-charset-utf-8" target="_blank">Stack Overflow answer</a>.</p>
    </div>`,
    html`<div>
      <p class="c-red">One important thing to remember when reading about code online: <i>it's okay if you only understand bits and pieces of what you are reading!</i></p>
      <p>Read everything you can get your hands on and you will find gradually that certain concepts and terms keep repeating themselves. Those are the things to try to understand first. Everything else can be filed away mentally as anecdotal or arcane trivia to be fully understood at a later time.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 3: Start editing HTML in your development environment</h3>
      <p>Read the <a href="/tools">tools guide</a> to learn how to use the tools you downloaded in the <a href="/intro">intro</a>.</p>
      <p>Follow the <a href="http://rik.smith-unna.com/command_line_bootcamp/" target="_blank">Command Line Bootcamp</a> to get familiar with the command line.</p>
      <p>Download the <a href="https://github.com/s3ththompson/howtocode/archive/master.zip" target="_blank">class folder</a> from <a href="https://github.com/s3ththompson/howtocode" target="_blank">GitHub</a> and open <code>1-hypertext/index.html</code> in Sublime Text.</p>
      <p>Open your terminal and type <code>$ cd {your class folder location}</code>, for example <code>$ cd ~/code/howtocode/1-hypertext</code>. (As a reminder, the <code>$</code> character represents the terminal prompt, that is, it signifies that the following text is a command that you should run in Hyper or another terminal. Just type the part starting with <code>cd</code>.)</p>
      <p>If it's your first time working in this folder, install the web server dependencies by typing <code>$ npm install</code>.</p>
      <p>Now start the web server by typing <code>$ npm run start</code>. (We'll talk more later about what those commands are doing and what kind of server is running. If you're curious, you can learn more about the server we're running <a href="https://github.com/mattdesl/budo" target="_blank">here</a>.)</p>
      <p>Open <a href="http://localhost:9966">localhost:9966</a> in your browser to see the web page.</p>
    </div>`,
    html`<div>
      <p>Using what you've learned about HTML, try editing some of the content of <code>index.html</code> and seeing the result. Here are some things to try:</p>
      <ul>
        <li>Change the image to a different Manet painting.</li>
        <li>Change the list of works into a table that contains columns for the title of the work and the year it was created.</li>
        <li>Change the title of the page.</li>
        <li>Figure out the best HTML elements to represent the date of Manet's birth and death.</li>
        <li>How would you add a caption to the image?</li>
      </ul>
      <p>(When you're done running the web server, press Ctrl+C to exit.)</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 4: Organize the content of your project into an HTML site</h3>
      <p>Create a new folder and start to compile the content that you will need for the website project you picked in the <a href="/intro">intro assignment</a>.</p>
      <p>Create one or more HTML pages to organize the content.</p>
      <ul>
        <li>How will users browse your content? Multiple pages? Hierarchies?</li>
        <li>What will the home page of your site show?</li>
        <li>Which HTML elements best represent the parts of your content?</li>
      </ul>
      <p>Deploy your project with <a href="https://www.netlify.com/">Netlify</a> or <a href="https://surge.sh/">Surge</a>. Both services offer free hosting for simple websites.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Other Resources</h3>
      <p><a class="arrow" href="https://learn.shayhowe.com/html-css/building-your-first-web-page/" target="_blank">Building Your First Web Page</a>, Shay Howe</p>
      <p><a class="arrow" href="https://realworldcoding.io/how-to-google-programming-problems-effectively-90f2a43ef982" target="_blank">How to Google Programming Problems Effectively</a></p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Reading</h3>
      <p><a class="arrow" href="http://art.yale.edu/file_columns/0001/0417/balkin.pdf" target="_blank">“Sometimes it Looks like a Duck, Sometimes it Looks like a Rabbit”</a>, Jack Balkin and Dan Michaelson, facilitated by Rob Mathews (2012)</p>
    </div>`
  ]

  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
