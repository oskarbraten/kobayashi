'use strict';

const fs = require('fs');
const Mustache = require('mustache');

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
    async render(template, view = {}, partials = {}, layout) {
        let _template = await Promise.resolve(template);
        let _layout = await Promise.resolve(layout);

        let _partials = {};
        for (let name in partials) {
            _partials[name] = await Promise.resolve(partials[name]);
        }

        let result = Mustache.render(_template, view, _partials);

        if (_layout) {
            view.body = result;
            return Mustache.render(_layout, view, _partials);
        } else {
            return result;
        }
    },
    async inject(source, destination, tag) {
        let src = await Promise.resolve(source);
        let dest = await Promise.resolve(destination);

        if (dest.includes('{{{' + tag + '}}}')) {
            return dest.replace('{{{' + tag + '}}}', src);
        } else if (dest.includes('{{' + tag + '}}')) {
            return dest.replace('{{' + tag + '}}', src);
        } else {
            throw Error('No tag "' + tag + '" found in destination.');
        }
    }
};
