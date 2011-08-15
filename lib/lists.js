/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    _ = require('kanso/underscore');

exports.ccindex = function (head, req) {
    start({code: 200, headers: {'Content-Type': 'text/html'}});

    var row, rows = [];
    while(row = getRow()) {
        rows.push(row.value)
    }

    var letters = [];
    _.each("abcdefghijlkmnopqrstuvwxyz", function(e) {
        letters.push({
            letter: e,
            display: e.toUpperCase(),
        })
    })
 
    var content = templates.render('ccindex.htm', req, {
        letters: letters,
        rows: rows,
    });
    return {title: 'Country/capital index', content: content};
};

