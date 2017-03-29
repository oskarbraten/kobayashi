'use strict';

const Mustache = require('mustache');
const fs = require('fs');

module.exports = {
    load(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, file) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(file);
                };
            });
        });
    },
    async render(param, view = {}) {
        let template = await Promise.resolve(param);
        let result = Mustache.render(template, view);
        return {
            template,
            result,
            async layout(param) {
                let layout = await Promise.resolve(param);
                view.body = result;
                return Mustache.render(layout, view);
            }
        };
    }
};

