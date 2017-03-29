'use strict';

let ky = require('../index.js');

let view = {
    world: "you"
};

ky.render(ky.load('./index.html'), view).then(({ template, result, layout }) => {

    console.log('Template: ', template, ' + ');
    console.log('View: ', view, ' = ');
    console.log('Result: ', result);

    return layout(ky.load('./layout.html'));

}).then((final) => {

    console.log('Rendered with layout: ', final);

}).catch((error) => {

    console.log('Ops, there was an error: ', error);

});
