# Kobayashi

Kobayashi is an asynchronous wrapper for Mustache.js. Adding support for loading files and using layouts.

Kobayashi requires a nodejs version that supports [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) & [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)).

```
npm install kobayashi
```

## Quick start

```js
const Kobayashi = require('kobayashi');

let file = Kobayashi.load('./index.html'); // returns a promise, which is later resolved in the render function.
let partial1 = Kobayashi.load('./partial1.html');
let layout = Kobayashi.load('./layout.html');

Kobayashi.render(file, { hello: 'world'}, { partial1, partial2: 'Hello.' }, layout).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
```

## Documentation

### async render(template, view = {}, partials = {}, layout)
Renders the template with the view. You can also supply partials and layout. When rendering with a layout the {{{body}}}-tag is the insertion point, and thus a reserved tag.

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves with the resulting rendering.

#### Parameters:
 * `template` : String or Promise
 * `view` : Object
 * `partials` : Object with Strings or Promises
 * `layout` : String or Promise



#### Example:
```js
let file = Kobayashi.load('./index.html'); // returns a promise, which is later resolved in the render function.
let partial1 = Kobayashi.load('./partial1.html');
let layout = Kobayashi.load('./layout.html');

Kobayashi.render(file, { hello: 'world'}, { partial1, partial2: 'Hello.' }, layout).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
```

### load(path)
Loads file from specified path.

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves with the content of the file.

#### Example:
```js
let file = Kobayashi.load('./index.html'); // returns a promise, which is later resolved in the render function.

Kobayashi.render(file, { hello: 'world'}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
```

### async inject(source, destination, tag)
Injects the source template into a destination template at the specified tag.

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves with the resulting template.

#### Parameters:
 * `source` : String or Promise
 * `destination` : String or Promise
 * `tag` : String

#### Example:
```js
let source = '<h1>Hello world!</h1>';
let destination = '<body>{{test}}<div>{{wow}}</div></body>';

Kobayashi.inject(source, destination, 'test').then(result => {
    console.log(result);
    // logs: <body><h1>Hello world!</h1><div>{{wow}}</div></body>.
}).catch(error => {
    console.log(error);
});

```