var html = require('choo/html')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - 2: Style'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = [
    html`<div>
      <h2 class="c-red">2. Style</h2>
    </div>`,
    html`<div>
      <h3 class="c-gray">What is CSS?</h3>
      <p>CSS (Cascading Style Sheets) is the code you use to style your webpage. CSS lets you apply styles selectively to elements in HTML documents.</p>
    </div>`,
    html`<div>
      <p>Here's a simple example of using CSS to make all paragraph elements red.</p>
      <pre><code>p {
  color: red;
}</code></pre>
    </div>`,
    html`<div class="p2">
      <img class="mx100" src="/assets/img/yale-css.png">
      <p class="tac">Yale Architecture with CSS</p>
    </div>`,
    html`<div class="p2">
      <img class="mx100" src="/assets/img/yale-no-css.png">
      <p class="tac">Yale Architecture without CSS</p>
    </div>`,
    html`<div>
      <p>As we've discussed before, you should take a moment to read a good intro to CSS, such as the MDN page <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank">So what is CSS, really?</a>.</p>
      <p>As a very short introduction, here are the parts to a CSS rule:</p>
      <ul>
        <li>The <i>Selector</i> is the part before the brackets which selects the element(s) to be styled. In this case, the selector was <code>p</code>, or the name of an HTML element.</li>
        <li>A <i>Declaration</i> is a single <i>rule</i> or line of code specifying which property you want to style, in this case <code>color: red;</code>.</li>
        <li>The <i>Property</i> is one of a number of ways that the browser lets you style elements. Some common properties include, <code>color</code>, <code>margin</code>, <code>width</code>, and <code>background</code>.</li>
        <li>The <i>Property value</i> is the part after the colon which tells the browser which appearance of many possible appearances you want to choose. In this case, <code>red</code> is one way to write a color value, along with hex code (<code>#000000</code>) and rgb (<code>rgb(255, 255, 255)</code>) colors.</li>
      </ul>
    </div>`,
    html`<div>
      <p>In general, the best approach to learning CSS is to learn a handful of selectors and a handful of properties (along with their common values). You can then gradually look up additional properties and expand your knowledge as your design requires more advanced styling.</p>
      <p>Here are a few resources to learning CSS properties:</p>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS on MDN</a></li>
        <li><a href="https://learn.shayhowe.com/html-css/" target="_blank">Shay Howe: Learn to Code HTML & CSS</a></li>
        <li><a href="https://learnxinyminutes.com/docs/css/" target="_blank">Learn X in Y Minutes: CSS</a></li>
        <li><a href="https://devdocs.io/css/" target="_blank">DevDocs: CSS</a></li>
      </ul>
      <p>There are way more CSS properties than you could ever memorize. Don't worry about it! Just look up the ones you need when you are working on a page design. You'll be surprised how quickly you start to memorize the common ones.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Where does CSS go?</h3>
      <p>You can put CSS in a <code>style</code> tag or reference an external <code>.css</code> file.</p>
      <pre><code>${`<!DOCTYPE html>
<html>
<head>
  <title>My Styled Page</title>
  <link rel="stylesheet" type="text/css" href="css/custom.css">
  <style>
    p {
      color: red;
    }
  </style>
</head>
<body>

</body>
</html>`}</code></pre>
    </div>`,
    html`<div>
      <h3 class="c-gray">Selectors</h3>
      <p>The most common ways to select an element are by element name, class, or id.</p>
      <pre><code>${'<div id="cancel" class="button large">Cancel</div>'}</code></pre>
      <p>An <code>id</code> is a unique name for a single HTML element. Elements can only have one id and an id can only refer to one element.</p>
      <p>A <code>class</code> is a name for one or more HTML elements. Elements can have many classes.</p>
      <p>In this case, I wouldn't use <code>div</code> as a selector for this element since I probably have many other divs on the page.</p>
      <p>I could use <code>#cancel</code> to select just this element (note the hashtag which signifies an id selector), but I probably want my button styles to apply to all buttons on the page.</p>
      <p>In that case <code>.button</code> is probably the best way to style this element and other buttons (note the dot which signifies a class selector).</p>
    </div>`,
    html`<div>
      <pre><code>.button {
  background-color: lightgray; // selects all elements with button class
}

.button.large {
  font-size: 18px; // selects all elements with button and large class
}

#cancel {
  color: red; // selects just the element with cancel id
}</code></pre>
      <p>Since styles cascade or add up, the above CSS would make the above button element show a lightgray background, a large font size, <i>and</i> red text.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Common Property Values</h3>
      <h4 class="c-gray">Colors</h4>
      <p>Colors can be represented 1 of 4 ways. Usually a color picker tool will show you all 4 values:</p>
      <ul>
        <li>Name: <code>red</code></li>
        <li>Hex Values: <code>#ff0000</code> ← <i>this is the easiest to copy and paste when you're lazy.</i></li>
        <li>RGB Values: <code>rgb(255, 0, 0)</code> ← <i>this is probably the best since it's precise and readable.</i></li>
        <li>HSL Values: <code>hsl(0, 100%, 50%)</code></li>
      </ul>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">color | MDN</a>.</p>
    </div>`,
    html`<div>
      <h4 class="c-gray">Lengths</h4>
      <p>A variety of properties require specifying a length value. There are a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length" target="_blank">lot</a> of types of length values, but here are the common ones:</p>
      <ul>
        <li>px: pixels e.g. <code>100px</code></li>
        <li>%: percentage relvative to an element's parent e.g. <code>50%</code> ← <i>this is useful for some things like columns that are a percentage of the width of their container</i></li>
        <li>em: relative size compared to font-size of the element e.g. <code>1.5em</code></li>
        <li>rem: relative size compared to font-size of the root <code>${'<html>'}</code> element e.g. <code>1.5em</code> ← <i>this is the most flexible since things will change sizes naturally as you zoom in and out of the page</i></li>
        <li>vh, vw: equal to 1% of height or width of the browser window e.g. <code>50vh</code> ← <i>this is useful for stuff that needs to be fullscreen</i></li>
      </ul>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length" target="_blank">length | MDN</a>.</p>
    </div>`,
    html`<div>
      <p>Many CSS properties are self-explanatory. You can probably figure out how to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font" target="_blank">font</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" target="_blank">color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background" target="_blank">background</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">border</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="_blank">box-shadow</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration" target="_blank">text-decoration</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity" target="_blank">opacity</a>.</p>
      <p>My favorite overlooked CSS properties are <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space" target="_blank">white-space</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" target="_blank">letter-spacing</a> for making precise typography style changes.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Layout</h4>
      <p>Layout in CSS is unfortunately less intuitive. It is, however, quite predictable once you learn some simple rules.</p>
      <h4 class="c-gray">Box Model or "how things are spaced inside elements"</h4>
      <p>Conceptually, every element is structured like a rectangular box:</p>
    </div>`,
    html`<div class="p2">
      <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Box_properties" target="_blank"><img class="mx100" src="/assets/img/box-model.png"></a>
      <p class="tac">The <code>box-sizing: border-box;</code> model</p>
    </div>`,
    html`<div>
      <p><code>box-sizing: border-box;</code> is the most intuitive box model because the width and heigh of the element include its border and padding. Unforunately, it's not the default one. To opt-in add this to the top of your CSS file:</p>
      <pre><code>*,
*:before,
*:after {
  box-sizing: border-box;
}</code></pre>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing" target="_blank">box-sizing | MDN</a>.</p>
    </div>`,
    html`<div>
      <h4 class="c-gray">Element display types or "how elements flow on a page"</h4>
      <p>There are a number of <code>display</code> values, but the most common ones are:</p>
      <ul>
        <li><code>display: block;</code> Take up any available width, regardless of content & begin on a new line</li>
        <li><code>display: inline;</code> Take up only the width of their content & continue on the same line </li>
        <li><code>display: flex;</code> Like block elements except with the ability to conveniently position child elements inside (see below)</li>
        <li><code>display: none;</code> Removes the item from the page completely</li>
      </ul>
      <p>All HTML elements have a default display type. Can you guess which common elements are block and which are inline?</p>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank">display | MDN</a>.</p>
    </div>`,
    html`<div>
      <h4 class="c-gray">Position or "how to nudge elements out of their default flow"</h4>
      <p>There are a number of <code>position</code> values, but the most common ones are:</p>
      <ul>
        <li><code>position: static;</code> Default, doesn't do anything</li>
        <li><code>position: relative;</code> Nudge an element in any direction relative to where it started</li>
        <li><code>position: absolute;</code> Nudge an element in any direction relative to the nearest parent element with <code>position: relative;</code></li>
        <li><code>position: fixed;</code> Position an element relative to the browser window and make it stay there</li>
      </ul>
      <p>In order to "nudge" an element in a given direction, use the <code>top</code>, <code>bottom</code>, <code>right</code>, and <code>left</code> properties.</p>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning" target="_blank">Positioning | MDN</a>.</p>
    </div>`,
    html`<div>
      <h3>Flexbox</h3>
      <p>Flexbox is a relatively new set of CSS properties that makes it easy to do a lot of things that were previously difficult in CSS. That power comes at the expense of a large number of options.</p>
      <p>You should use flexbox any time you need to layout a number of items with specific intent about how things are centered and aligned.</p>
      <p>Pick and choose options from a guide like the <a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a> <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Guide to Flexbox</a>.</p>
      <p>For more info, see <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank">Flexbox | MDN</a> or try the <a href="http://flexboxfroggy.com/" target="_blank">Flexbox Froggy game</a>.</p>
    </div>`,
    html`<div class="p2">
      <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"><img class="mx100" src="/assets/img/justify-content.png"></a>
      <p class="tac">An example of Flexbox alignment options</p>
    </div>`,
    html`<div>
      <p>One of the most common uses of flexbox is to organize your page into columns:</p>
      <pre><code>.container {
  display: flex;
  justify-content: space-between;
}
.container .columns {
  width: 33.3333%;
}</code></pre>
    </div>`,
    html`<div>
      <p>If you see CSS layout examples using something called a <code>float</code>, you should try to avoid it at all costs. Flexbox largely supersedes float-based layout and will save a lot of unnecessary frustration with previous limitations of CSS.</p>
    </div>`,
    html`<div>
      <h3>CSS Resets</h3>
      <p>Different browsers have different default styles for elements. It's helpful to start with a clean slate by applying a normalizing css "reset."</p>
      <p>For example, Chrome applies <code>padding: 2px 6px 3px;</code> to default <code>button</code> elements while Firefox applies <code>padding: 0 8px;</code>.</p>
      <p>You can read more about resets in general <a href="https://css-tricks.com/reboot-resets-reasoning/" target="_blank">here</a>. It's good practice to include something like <a href="https://necolas.github.io/normalize.css/" target="_blank">normalize.css</a> in your html page before your custom css.</p>
    </div>`,
    html`<div>
      <h3>Additional Topics and where to read more about them</h3>
      <h4 class="c-gray">Media Queries & Responsive Design</h4>
      <p>In order to make designs change in response to different environments or screen sizes, you can use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank">media queries</a> to conditionally apply different styles.</p>
      <h4 class="c-gray">Animation</h4>
      <p>You can use CSS to animate styles and create motion on your page. Here is an introduction on MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">Using CSS animations</a></p>
    </div>`,
    html`<div>
      <h4 class="c-gray">Browser prefixing</h4>
      <p>Not all browsers support all CSS features. You can use these resources to see how widely the feature is supported:</p>
      <ul>
        <li><a href="https://caniuse.com/" target="_blank">Can I use?</a></li>
        <li><a href="http://shouldiprefix.com/" target="_blank">Should I prefix?</a></li>
      </ul>
      <p>The most common CSS property that requires prefixing is <code>transform</code>:</p>
      <pre><code>.example {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}</code></pre>
    </div>`,
    html`<div>
      <h3>Chrome DevTools</h3>
      <p>DevTools is indispensible for seeing the results of CSS changes live.</p>
      <p>See the updated <a href="/tools">tools guide</a> for DevTools tips and tricks.</p>
    </div>`,
    html`<div>
      <h3>CSS Frameworks</h3>
      <p>Writing lots of CSS by hand can take a long time for complex designs. You can use a CSS framework to instantly add a polished theme to your page.</p>
      <div class="p2">
        <a href="https://picturepan2.github.io/spectre/index.html" target="_blank"><img class="mx100" src="/assets/img/spectre.png"></a>
      </div>
      <p>Check out these frameworks to begin:</p>
      <ul>
        <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
        <li><a href="https://picturepan2.github.io/spectre/index.html" target="_blank">Spectre</a></li>
      </ul>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 5: Modify and understand the CSS for the Manet example</h3>
      <p>Download the updated <a href="https://github.com/s3ththompson/howtocode/archive/master.zip">class folder</a> from <a href="https://github.com/s3ththompson/howtocode" target="_blank">GitHub</a> and open <code>2-style/</code> in Sublime Text.</p>
      <p>Note: if you want to explore how developers share code, try to figure out how to install Git / <a href="https://desktop.github.com/" target="_blank">GitHub Desktop</a> to sync updates from the class folder automatically.</p>
      <p>Understand the CSS behind the page and modify it change the layout.</p>
      <ul>
        <li>Try to use a different flexbox option to arrange the main images in a different manner.</li>
        <li>Try incorporating some code from a CSS framework to make the site look more polished.</li>
        <li>Try adding a media query to make the site look good on a small screen.</li>
      </ul>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 6: Add CSS to your class project</h3>
      <p>Continue building your project and add CSS to start giving your pages structure.</p>
      <ul>
        <li>How will your site look? Will it be inviting? Mysterious? Spartan? Baroque?</li>
        <li>What does your content need to appear correctly? Why don't the default HTML elements suffice without CSS?</li>
        <li>What is the smallest amount of CSS you can write to get the desired result?</li>
        <li>How did last week's HTML layout hinder or aid your CSS coding process?</li>
      </ul>
      <p>Deploy your updated project with <a href="https://www.netlify.com/" target="_blank">Netlify</a> or <a href="https://surge.sh/" target="_blank">Surge</a>. </p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 7: Pick an example website to explore in class</h3>
      <p>Find a website that has an interesting layout. Try to understand (broadly) how the site uses CSS to accomplish the effect.</p>
      <p>Come to class ready to discuss examples together.</p>
    </div>`
  ]

  if (state.slides.show && state.slides.index > content.length - 1) emit('replaceState', state.href)
  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
