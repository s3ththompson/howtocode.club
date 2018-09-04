var html = require('choo/html')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - 3: Script I'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = [
    html`<div>
      <h3 class="c-red">3. Script I</h3>
    </div>`,
    html`<div class="p2">
      <img class="mx100" src="/assets/img/emoji-site.gif">
      <p class="tac">Leila McGlew's site by Dow-Smith Studio</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What is JavaScript?</h3>
      <p>JavaScript was created to make webpages come alive.</p>
      <p>It was initially called LiveScript, but it was renamed JavaScript to cash in on the popularity of the Java programming language. JavaScript is not based on Java. (CoolScript was <a href="https://twitter.com/awbjs/status/905832874703708160" target="_blank">also briefly considered</a>.)</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">What is JavaScript used for?</h3>
      <p>JavaScript can manipulate websites, respond to user interactions, and send and receive additional information from the server.</p>
      <p>On the web, JavaScript can:</p>
      <ul>
        <li>Add new HTML to the page and change the CSS of elements.</li>
        <li>Respond to the user's mouse clicks to create a slideshow.</li>
        <li>Upload files and validate the data submitted in a form.</li>
        <li>Draw dynamic 3D graphics and create sounds.</li>
      </ul>
    </div>`,
    html`<div>
      <p>Here are some things that JavaScript can't do on the web:</p>
      <ul>
        <li>Access other tabs/windows in your web browser</li>
        <li>Access files on your computer (unless you explicitly upload a file)</li>
      </ul>
    </div>`,
    html`<div>
      <h3 class="c-gray">Programming language vs. API vs. Platform</h3>
      <p>These words may seem arcane, but they convey important distinctions between parts of code.</p>
      <p>JavaScript is a <i>programming language</i>, which means it defines a syntax with certain semantics or building blocks for code. This is JavaScript:</p>
      <pre><code>let i = 1;
i = i + 3
// 4 (this is a comment, which means JavaScript ignores it)</code></pre>
    </div>`,
    html`<div>
      <p>An application programming interface or <i>API</i> is a means of accessing capabilities on a certain platform, like Google Chrome. You need APIs for your code to have an effect on something concrete. Here are the APIs (<code>Document.getElementById()</code> and <code>Element.classList</code>) to add a class to an element:</p>
      <pre><code>let el = document.getElementById('item');
el.classList.add('myclass');</code></pre>
    </div>`,
    html`<div>
      <p>A <i>platform</i> or runtime is the combination of an environment (the browser), a programming language (JavaScript), and the capabilities the environment exposes (APIs).</p>
      <p>The browser is the platform on which your web page is running. Node.js is a platform which lets you run JavaScript programs on your computer. Both platforms expose different APIs and have different capabilities. Node.js, for example, does not expose the <code>Document.getElementById()</code>, for example, so the above code will not work on Node.js.</p>
      <p>Much of the complexity of coding involves navigating particularities of different environments and APIs, not necessarily learning the programming language itself.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Hello World</h3>
      <p>Let's get started.</p>
      <p>Add a script element somewhere on your webpage:</p>
      <pre><code>${`<script>
  console.log( 'Hello, world!' );
</script>`}</code></pre>
      <p><code>console.log</code> is how you print things from your code.</p>
      <p>This will have no effect on the website itself. You must open the Developer Console in Google Chrome to see the result.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">External Scripts</h3>
      <p>If you're writing a lot of JavaScript, you should move it into an external file, similar to how you can write CSS in an external file.</p>
      <p>Simply add this line to the head of your HTML:</p>
      <p><code>${`<script src="/path/to/script.js"></script>`}</code>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Basic JavaScript</h3>
      <p>The best resource for learning modern JavaScript is a site called <a href="https://javascript.info/" target="_blank">Javascript.info</a>. <a href="https://developer.mozilla.org/en/JavaScript/Guide" target="_blank">MDN</a> is still a great resource for JavaScript, although it has less of a linear curriculum. I will link to the relevant pages where you should read more detail about the following topics.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Variables</h3>
      <p>A variable is a way to store data with a name. You might use a variable to store a number, some text, or an HTML element.</p>
      <p>Here's how to declare a variable and put some data into it via an assignment (<code>=</code>).</p>
      <p><pre><code>let numberOfVisitors;
numberOfVisitors = 4;</code></pre></p>
      <p>JavaScript statements are usually written on separate lines, each ending with a semicolon. We can simplify our code by declaring and assigning a variable on one line:</p>
      <p><pre><code>let numberOfVisitors = 4;</code></pre></p>
    </div>`,
    html`<div>
      <p>JavaScript, like any programming langauge, is very picky about the exact characters which comprise your code.</p>
      <p>Variables must contain only letters, digits, and the symbols <code>$</code> and <code>_</code>. Variables may not start with a number. Case matters: <code>mydata</code> and <code>myData</code> are different. The latter is usually how developers write multiple-word variables.</p>
      <p>You may see <code>var</code> used instead of <code>let</code> in other code online. <code>let</code> is the more modern version and almost the same. For now you can substitue <code>let</code> for <code>var</code>.</p>
    </div>`,
    html`<div>
      <p>You can update the value of a variable if the data you want to store change.</p>
      <p><pre><code>let numberOfVisitors;
numberOfVisitors = 4;
// someone leaves
numberOfVisitors = 3;</code></pre></p>
      <p>Read more about variables <a href="https://javascript.info/variables" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Data Types</h3>
      <p>Here are some data your variables can hold:</p>
      <ul>
        <li>Numbers: <code>let pi = 3.14;</code></li>
        <li>Text, or strings: <code>let message = 'Hello, World!';</code></li>
        <li>A boolean (logical type): <code>let isLoaded = true;</code></li>
        <li>An object (like an HTML object)</li>
      </ul>
    </div>`,
    html`<div>
      <h3 class="c-gray">Strings</h3>
      <p>Strings have three types of valid enclosing quotes:</p>
      <ul>
        <li>Double quotes: <code>"Hello"</code></li>
        <li>Single quotes: <code>'Hello'</code></li>
        <li>Backticks: <code>${`\`Hello\``}</code></li>
      </ul>
      <p>Backticks are useful because they allow data to be embedded into the string</p>
      <p><pre><code>let name = 'Max';
let message = \`Hello \${name}!\` // Hello Max!</code></pre></p>
      <p>Read more about data types <a href="https://javascript.info/types" target="_blank">here</a> and see how they can be <a href="https://javascript.info/types" target="_blank">converted</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Objects</h3>
      <p>An object is a way to build up complex entities from the primitive values.</p>
      <p>Objects have properties, or "key: value" pairs. The key is a string or a name for the property and the value is a piece of data.</p>
      <p>Here's how to create an object that represents a person:</p>
      <p><pre><code>let user = {
  name: 'Max',
  age: 30
};</code></pre></p>
      <p>Note the comma between the properties. In the first property, the key is <code>'name'</code> and the value is <code>'Max'</code>.</p>
    </div>`,
    html`<div>
      <p>You can later access the data in the object by typing either:</p>
      <p><pre><code>console.log(user.name); // Max
console.log(user['name']); // Max</code></pre></p>
      <p>The latter is useful if your key is stored in a variable:</p>
      <p><pre><code>let key = 'name';
console.log(user[key]); // Max</code></pre></p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Special Objects</h3>
      <p>Two useful types of objects with special syntax are arrays and functions.</p>
      <p>Arrays are a way to store ordered collections of data.</p>
      <p><pre><code>let fruits = ["Apple", "Orange", "Plum"];</code></pre></p>
      <p>Array elements are numbered, starting with 0. You can access array elements like this:</p>
      <p><pre><code>console.log(fruits[0]); // Apple
console.log(fruits[2]); // Plum</code></pre></p>
      <p>You can also find the length of an array like this:</p>
      <p><pre><code>console.log(fruits.length) // 3</code></pre></p>
      <p>Read more about arrays <a href="https://javascript.info/array" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Functions</h3>
      <p>Up until now, we haven't learned how to really <i>do</i> anything. Functions are the first way to start making your site do something!</p>
      <p>Functions are a way to create a building block of code that can be repeated many times.</p>
      <p><pre><code>function sayHello(name) {
  console.log(\`Hello \${name}!\`);
}

sayHello('Max'); // Hello Max!
sayHello('Emily'); // Hello Emily!
sayHello('Andrew'); // Hello Andrew!
</code></pre></p>
    </div>`,
    html`<div>
      <p>After the <code>function</code> keyword comes the name of your function, and then a list of parameters between parentheses. Inside the curly brackets live the function body or the main code for the function.</p>
      <p>Parameters are available within the function body like variables. Variables declared within the function body are only visible within the body (however you can access variables outside the function from within).</p>
      <p>Functions can also return a value which the calling code can access or assign.</p>
      <p><pre><code>function add(n1, n2) {
  return n1 + n2;
}

console.log(add(1, 3)) // 4
let sum = add(2, 4)
console.log(sum); // 6
</code></pre></p>
      <p>Read more about functions <a href="https://javascript.info/function-basics" target="_blank">here</a> and make sure you understand the alternate ways to write functions <a href="https://javascript.info/function-expressions-arrows" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <p>In addition to writing your own functions, you can call builtin APIs to accomplish certain functionality. APIs are really just builtin functions. JavaScript has some of its own and the browser exposes even more.</p>
      <p>Here are a few useful ones:</p>
      <ul>
        <li><code>let element = document.querySelector('.myclass');</code> (returns the first matching element from the CSS selector)</li>
        <li><code>let elements = document.querySelectorAll('.myclass');</code> (returns an array of elements)</li>
        <li><code>let rand = Math.random();</code> (returns a random number between 0 and 1)</li>
        <li><code>let result = Math.sin(40);</code> (calculates the sine of an angle in radians)</li>
      </ul>
    </div>`,
    html`<div>
      <p>Some builtin functions are actually properties of objects returned by other functions.</p>
      <p>These functions are called methods.</p>
      <ul>
        <li><code>element.classList.add('myclass');</code></li>
        <li><code>element.classList.remove('myclass');</code></li>
        <li><code>element.classList.toggle('myclass');</code></li>
      </ul>
    </div>`,
    html`<div>
      <p>An API doesn't just mean a builtin function. It can also refer to the other properties available on objects associated with the method:</p>
      <ul>
        <li><code>console.log(element.classList);</code> (prints an array of the element's classes)</li>
        <li><code>console.log(element.style);</code> (prints the inline style of an element)</li>
        <li><code>console.log(window.pageYOffset);</code> (prints the amount of pixels the page is currently scrolled along the verical axis)</li>
      </ul>
      <p>Sometimes setting new values on these exposed properties can have effects.</p>
      <ul>
        <li><code>element.style.fontSize = '14px';</code> (sets an element's font-size CSS property dynamically)</li>
      </ul>
    </div>`,
    html`<div>
      <h3 class="c-gray">How to Code</h3>
      <p>You've now learned how to accomplish any single thing in code!</p>
      <p>Making anything happen on your webpage is just a matter of finding the correct API for the job and calling a method or setting a particular property.</p>
      <p>For example, you could Google 'how to change the title of my wepage JS' to discover the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/title" target="_blank"><code>document.title</code> property</a>.</p>
      <p>The MDN <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank">introduction to APIs</a> is also very useful.</p>
      <p>We'll talk more about browser APIs next week, but you can also read more <a href="https://javascript.info/browser-environment" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Making decisions in code</h3>
      <p>In order to write code that makes things happen conditionally, you will need to use <code>if</code>/<code>else</code> statements.</p>
      <p><pre><code>let name = prompt('What is your name?')
if (name.startsWith('A')) {
  console.log( 'Your name is at the beginning of the alphabet.' );
} else {
  console.log( 'Your name falls later in the alphabet.' ); // any other letter
}
</code></pre></p>
      <p>The entire <code>else</code> block is optional.</p>
      <p>Read more about conditionals <a href="https://javascript.info/ifelse" target="_blank">here</a> and ways to compare data <a href="https://javascript.info/comparison" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Repeating things in code</h3>
      <p>Often when making websites we need to repeat certain code a specific number of times. A <code>for</code> loop allows us to repeat something a dynamic number of times:</p>
      <p><pre><code>${`let elements = document.querySelectorAll('img'); // all images
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  element.classList.add('fadein');
}`}</code></pre></p>
      <p>Read more about loops <a href="https://javascript.info/while-for" target="_blank">here</a>.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 8: Remix a typography Glitch</h3>
      <p><a href="https://glitch.com/edit/#!/remix/wavywavy" target="_blank">Remix</a> Sean Catangui's typography Glitch to make a new typographic effect.</p>
      <p><a href="http://wavywavy.glitch.me/" target="_blank">Wavy Wavy Glitch</a></p>
      <p>Sign up for an account on the code sharing service Glitch, understand the existing source code, and make a variation.</p>
    </div>`,
    html`<div>
      <h3 class="c-gray">Assignment 9: Add JavaScript to your personal site</h3>
      <p>From here on out, your goal should be to incorporate as much of your desired functionality as you feel capable.</p>
      <p>Each week we will learn new capabilities and functionality for you to incorporate with JavaScript.</p>
    </div>`
  ]

  if (state.slides.show && state.slides.index > content.length - 1) emit('replaceState', state.href)
  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
