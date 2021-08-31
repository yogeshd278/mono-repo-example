'use strict';

module.exports = myFirstApi;

function myFirstApi(type, count) {
    return type == 'string' ? `This is my first testing packages: ${count}` : `This is my second testing packages: ${count}`;
}