'use strict';

let Kobayashi = require('../index.js');

let index = Kobayashi.load('./index.html');
let layout = Kobayashi.load('./layout.html');


let view = {
    world: "you"
};

async function test() {
    let results = await Kobayashi.render(index, view, {}, layout);
    let injection_test = await Kobayashi.inject(index, layout, 'body');

    console.log('Render results: ', results);
    console.log('Injection results: ', injection_test);
}

test();
