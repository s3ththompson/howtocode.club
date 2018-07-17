var html = require('choo/html')

var page = require('./partials/page')
var slide = require('./partials/slide')

var TITLE = 'How To Code - Guide: Tools'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = [
    html`<div>
      <h2 class="c-red">Guide: Tools & Development Environment</h2>
    </div>`,
    html`<div>
      <p>In order to be a productive developer, you should spend some time learning how best to use the tools of the trade.</p>
      <p>Technically, you could code an entire website using your computer's built in text editor. However, the following tools and programs will allow you to be more productive and access a larger ecosystem of code, plugins, and conveniences.</p>
      </div>`,
    html`<div>
      <h3 class="c-gray">Text Editor</h3>
      <div class="p2">
        <a href="https://www.sublimetext.com/" target="_blank"><img class="mx100" src="/assets/img/tools-sublime.jpg"></a>
      </div>
    </div>`,
    html`<div>
        <h4 class="fsi">What is it for?</h4>
        <p>A text editor allows you to write and edit text files which make up the code for your website. You can write in any programming language with any text editor. Any file can contain code, but you should save the file with a file extension that matches the language contained within. For example, you should save an HTML file with the <code>.html</code> extension.</p>
        <h4 class="fsi">What makes a good text editor?</h4>
        <p>A good text editor contains features that help you read and write code. Some useful features include:</p>
        <ul>
          <li>Syntax Highlighting - highlight different parts of code syntax with different colors</li>
          <li>Autocomplete - finish common code boilerplate automatically</li>
          <li>Advanced Find & Replace - search through multiple files with code-specific search functionality</li>
          <li>Extensibility - install plugins to extend the editor's functionality or help it better understand new languages</li>
        </ul>
        <h4 class="fsi">Recommendation</h4>
        <p><a class="arrow" href="https://www.sublimetext.com/" target="_blank">Sublime Text 3</a></p>
      </div>`,
    html`<div>
      <h3 class="c-gray">Terminal / Shell / Command Line</h3>
      <div class="p2">
        <a href="https://www.hyper.is" target="_blank"><img class="mx100" src="/assets/img/tools-terminal.jpg"></a>
      </div>
    </div>`,
    html`<div>
        <h4 class="fsi">What is it for?</h4>
        <p>The terminal is a way to whisper into your computer's ear. The terminal allows you to run programs and manipulate files using text commands that afford much more power and control than using other applications with user interfaces.</p>
        <p>For example, moving all of the JPEG images from one folder to another is one command in the terminal, while the equivalent operation using your mouse and your computer's file explorer might take much longer.</p>
        <p>The terminal is also the only way to launch and interact with programs that don't have a user interface. For example, many computers have a built-in program called <code>date</code> that displays a no-frills text printout of the date. This program (like any other program on your computer) exists as an executable file in the filesystem (usually at <code>/bin/date</code>). Unlike iTunes or Google Chrome, however, it has no user interface and cannot be launched from the Dock or the Start Menu. The only way to access and interact with the program is to use the command line. In this case, by typing <code>$ date</code>.</p>
    </div>`,
    html`<div>
        <p>Web developers frequently use the terminal for a number of reasons:</p>
        <ul>
          <li>Web servers are often run from the command line.</li>
          <li>Web development frequently requires moving around and renaming large numbers of text files. This is very easy from the command line.</li>
          <li>Many web development tools are only available as command line apps or command line interfaces (CLIs). For example, <a href="https://github.com/JamieMason/ImageOptim-CLI" target="_blank">ImageOptim-CLI</a> is a tool for resizing and optimizing images for the web, but it only works via the command line.</li>
          <li>Most web libraries and frameworks are written in JavaScript and distributed via the command line. While you can often copy and paste their code from an online source directly into your text files, it is often much more efficient to use the command line to download all of the libraries that you use and incorporate them into your project in one fell swoop.</li>
        </ul>
    </div>`,
    html`<div>
        <h4 class="fsi">How do I use the command line?</h4>
        <p class="c-red">Note: every computer operating system has a different command line, although macOS and Linux come from the same family of systems called Unix. For this reason, almost all programming instruction assumes that you are using a Unix terminal. If you are running a Windows machine, you will need a way to emulate a Unix system (see below).</p>
        <p>The command line is always <i>inside</i> a single directory on your computer, usually your home directory.</p>
    </div>`,
    html`<div>
        <p>You can see the current directory by typing <code>$ pwd</code>, for "print working directory", and pressing Enter. (Note: the <code>$</code> character represents the terminal prompt, that is, it signifies that the following text is a command that you should run in a terminal. What you should actually type is just <code>pwd</code>.)</p>
        <p>You can see the files in the directory by typing <code>$ ls</code>, for list.</p>
        <p>(It's worth noting that <code>pwd</code> and <code>ls</code> are just little programs on your computer with very specific functionality. This is the case for almost all terminal commands.)</p>
        <p>You can also change directories by typing <code>$ cd {the directory you watch to change to}</code>.</p>
        <p>Sometimes you will run a program from the command line that doesn't exit immediately (like a web server). This program will keep running and prevent you from entering any new commands in that window until you stop the program, usually by pressing Ctrl-C.</p>
    </div>`,
    html`<div>
        <h4 class="fsi">Recommendation</h4>
        <p><a class="arrow" href="https://www.hyper.is/" target="_blank">Hyper</a> or the builtin macOS Terminal</p>
        <h4 class="fsi">Tutorial</h4>
        <p><a class="arrow" href="http://rik.smith-unna.com/command_line_bootcamp/" target="_blank">Command Line Bootcamp</a> (unfortunately, the interactive online terminal is broken, but you can follow the lessons on your computer)</p>
      </div>`,
    html`<div>
        <h3 class="c-gray">Node.js</h3>
        <h4 class="fsi">What is it for?</h4>
        <p>JavaScript was originally developed for browsers to add interactivity to web pages. However, it was such a popular language that Node.js was created as a way to write and run JavaScript programs on your computer itself.</p>
        <p>While JavaScript inside of a web browser has no way of writing files on your computer, for example, Node.js programs written in JavaScript can read and write files to your filesystem and more. Technically this means that Node.js is a JavaScript "runtime". While JavaScript is the language itself, the Node.js runtime provides the capabilities necessary to write programs for your computer. In contrast, a web browser, like Google Chrome, provides a browser runtime which allows you to write JavaScript for web pages. Although these may seem like confusing distinctions, we will talk more about them in class soon.</p>
    </div>`,
    html`<div>
        <p>Node.js itself is a program called <code>node</code> that runs or "interprets" JavaScript files on your computer. You can test out the Node.js interpreter from the terminal by typing <code>$ node</code>. You should be met with another prompt where you can type JavaScript. Try typing <code>1 + 1</code> and hitting Enter. Remember that you can exit from long-running programs on the command line by pressing Ctrl+C.</p>
        <p>Node.js also includes another program called <code>npm</code> which is a "package manager". That is, it assists programmers in downloading various dependencies, libraries, and frameworks from the internet.</p>
    </div>`,
    html`<div>
        <h4 class="fsi">How do I use Node.js?</h4>
        <p>We will talk more about using Node.js once we start learning JavaScript.</p>
        <p>For now, just know that the web server we are using in class was written in JavaScript for Node.js. Therefore, you will need to invoke some Node.js-specific commands on the terminal to use the web server. See the various class assignment instructions for more details.</p>
        <h4 class="fsi">Download</h4>
        <p><a class="arrow" href="https://https://nodejs.org/en/" target="_blank">Node.js</a></p>
      </div>`,
    html`<div>
        <h3 class="c-gray">Additional Windows Notes</h3>
        <p>As mentioned above, Windows users will need to follow a few extra steps to get a Unix-style terminal on their machine.</p>
        <p>Please follow the following instructions to get started:</p>
        <p><a class="arrow" href="https://docs.microsoft.com/en-us/windows/wsl/install-win10" target="_blank">Install the Windows Subsystem for Linux</a></p>
        <p><a class="arrow" href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">Windows Subsystem for Linux FAQ</a></p>
        <p><a class="arrow" href="https://hackernoon.com/running-nodejs-on-linux-on-windows-88bd12993bae" target="_blank">Running Node.js on Linux on Windows</a></p>
      </div>`
  ]

  if (state.slides.show && state.slides.index > content.length - 1) emit('replaceState', state.href)
  return state.slides.show ? slide(content[state.slides.index], state) : page(content, state)
}
