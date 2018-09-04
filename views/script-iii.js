var html = require('choo/html')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - 5: Script III'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = [
    html`<div>
      <h3 class="c-red">5. Script III</h3>
    </div>`,
    html`<div>
      <h3 class="c-gray">Synchronous vs. Asynchronous</h3>
      <p>Synchonous code is written in a linear manner where each statement is executed in sequence, one after the other. This JavaScript is synchronous:</p>
      <pre><code>console.log('Hello');
console.log('Hello 2');
console.log('Hello 3');</code></pre>
    </div>`,
    html`<div>
      <p>However, many things in the browser take an unknown amount of time: for example, loading resources or accessing information in a web database.</p>
      <p>In order that a slow function not pause the entire page indefinitely, JavaScript makes use of asynchronous code extensively.</p>
      <p>In this model, functions are called with a "callback" function as a parameter. When the function is done completing an asynchronous task, it will invoke the "callback" function. Meanwhile, other parts of the program can continue running.</p>
      <pre><code>setTimeout(function() {
  console.log('Hello 1');
}, 1000); // pause for 1 s or 1000 ms before running the anonymous callback function
console.log('Hello 2');</code></pre>
    </div>`,
    html`<div>
      <p>Callbacks are a fundamental part of JavaScript, but they can be quite counterintuitive to understand at first.</p>
      <p>Spend some time reading about them on JavaScript.info: <a href="https://javascript.info/callbacks" target="_blank">Callbacks</a></p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Classes</h3>
      <p>In many programming languages (categorized as "object-oriented" languages), code can be organized in units called "classes."</p>
      <p>A class is a unit of code which combines data (object values) and behavior (functions) in a way which makes it easy to create many versions or instances of the code.</p>
      <p>You can think of a class as a way of grouping or organizing code as well as a way of abstracting complexity behind a simpler interface.</p>
    </div>`,
    html`<div>
      <pre><code>class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area () {
    return this.height * this.width;
  }
}</code></pre>
      <p>This class declares a rectangle object. The constructor is invoked to set up the object. The <code>this</code> keyword will refer to the instance of the class itself.</p>
    </div>`,
    html`<div>
      <p>We can use the class as follows:</p>
      <pre><code>const square = new Rectangle(10, 10);
console.log(square.area()); // 100</code></pre>
      <p>Read more about classes on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" target="_blank">MDN</a> or in more depth on <a href="https://javascript.info/object-oriented-programming" target="_blank">JavaScript.info</a>.</p>
      <p>Object-oriented programming is an entire field of computer science. This is a brief introduce to a topic which has a lot of depth. Continue reading about the topic as you run into issues organizing your code.</p>
    </div>`
  ]

  if (state.slides.show && state.slides.index > content.length - 1) emit('replaceState', state.href)
  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
