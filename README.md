# Kobayashi

> Lightweight Mustache shim for node.

Kobayashi requires a nodejs version that supports [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) & [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)).

```
npm install kobayashi
```

## Usage

```js

let ky = require('kobayashi');

ky.render('<h1>Hello {{world}}</h1>', { world: 'world' }).then(({ result }) => {
    console.log('Result: ', result);
}).catch((error) => {
    console.log('Ops, there was an error: ', error);
});

ky.render(ky.load('./index.html'), { stuff: 'yes' }).then(({ result }) => {
    console.log('Result: ', result);
}).catch((error) => {
    console.log('Ops, there was an error: ', error);
});

ky.render(ky.load('./index.html'), { stuff: 'yes' })
    .then(({ layout }) => layout('<body>{{{body}}}</body>'))
    .then(result => {
        console.log(result);
    }).catch((error) => {
    console.log('Ops, there was an error: ', error);
});


```