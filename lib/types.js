/**
 * Kanso document types to export
 */

var Type = require('kanso/types').Type,
    fields = require('kanso/fields');

exports.countryCapital = new Type('countryCapital', {
    fields: {
        country: fields.string(),
        capital: fields.string(),
    }
});
