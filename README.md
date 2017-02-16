# JavaScript - Fundamentals #

This is an overview of the JavaScript language to help new developers get up and running.

Content is splitted into small modules with suggestion time to complete the activy.
Could be studied by day as individual, group and/or dojo.

### Online editors ###

* [CodePen](http://codepen.io)
* [JSFiddle](http://jsfiddle.net)
* [Cloud9](http://c9.io)
* [GistRun](https://gist.run/)

## Content index ##

### Module 1 (1h) ###
* [Variables](https://www.javascript.com/learn/javascript/variables)
* Strings - [Javascript.com](https://www.javascript.com/learn/javascript/strings); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* Numbers - [Javascript.com](https://www.javascript.com/learn/javascript/numbers); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* Booleans - [Javascript.com](https://www.javascript.com/learn/javascript/booleans); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
* Operators - [Javascript.com](https://www.javascript.com/learn/javascript/operators); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* Conditionals- [Javascript.com](https://www.javascript.com/learn/javascript/conditionals); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

> [Exercise 1](./docs/exercises/1.module.md)

### Module 2 (1h) ###
* Objects - [Javascript.com](https://www.javascript.com/learn/javascript/objects); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* Arrays - [Javascript.com](https://www.javascript.com/learn/javascript/arrays); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object)

> [Exercise 2](./docs/exercises/2.module.md)

### Module 3 (1h) ###
* [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    * Online tool: [regex101](https://regex101.com/)
* Functions - [Javascript.com](https://www.javascript.com/learn/javascript/functions); [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Function)
    * [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_parameters)
    * [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Using_the_arguments_object)

> [Exercise 3](./docs/exercises/3.module.md)

### Module 4 (2h) ###
* [Custom objects ("Class")](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
    * [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
    * [Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

> [Exercise 4](./docs/exercises/4.module.md)

### Module 5 (1h) ###
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> [Exercise 5](./docs/exercises/5.module.md)

### Module 6 (1h) ###
* [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_handling_statements)
* [Try/Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
* [console](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)

> [Exercise 6](./docs/exercises/6.module.md)

### Module 7 (1h) ###
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

> [Exercise 7](./docs/exercises/7.module.md)

### DOJO (2h) ###

> DOJO - JS Fundamentals

* * *

## Implementing solutions for exercises ##

You can check if your solutions are correct using the [TDD paradigm](https://en.wikipedia.org/wiki/Test-driven_development "Test-Driven-Development").

### Setup environment ###
If you use npm (default):

```shell
npm install
```

If you use yarn (it's a new tool for node packages which's way faster), you can use:

```shell
yarn install
```

### Before coding ###
First you should fork this repository so you'll be able commit and push your solutions to github without worry about losing your code and also not mess up with the shared repository, which has the tests structure.

However, if you'd like to retrieve new updates from the mainstream repository, you'll have to bring the changes manually to your repository.

You can do this by adding the original remote to your forked repository and merging from there to your local repository.

There's an easy tutorial to keep forked repositories updated [here](https://www.youtube.com/watch?v=-zvHQXnBO6c).

### Implementing your solutions ###
Your solutions must be implemented on `lib/module${n}.js`.
So for exercises of module1, you must edit `lib/module1.js`.

In this file you'll see comments indicating where to implement your solution.
You'll just export a function returning your answer.

In this comment you'll be informed about the answer format, which usually will be an object.
Here you also can implement shared behavior between tests in a "private" scope (which could be not exported).

### Running your solutions ###

To test _**ALL** solutions_:
```shell
npm test
```

If you would like to test _a **specific** solution of yours_ you can do:

```shell
npm run `test${n}`
```

For instance, if you want to see how's your solution for module4, you should do:

```shell
npm run test4
```

### Checking the provided solutions ###

If you want to run tests with the *provided solutions*:

```shell
npm run solutions
```

To check for a *specific provided solution*:

```shell
npm run `solution${n}`
```

This can be used to be sure the right solutions is really right :)

### Coverage ###

If you want to check tests' coverage:

```shell
npm run cover
```

### Lint ###

To check if your code is attending to standards:

```shell
npm run lint
```

### Watch ###

If you want to run lint + tests + coverage you can do:

```shell
npm run watch
```

And this will listen for changes in your code (tests and solutions).
As you change your code it'll run again automatically and you'll see it on the console.

Obs: all commands using `npm` can be run with `yarn`.
