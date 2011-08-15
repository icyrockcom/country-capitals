/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
//    {from: '/', to: '_show/welcome'},
    {from: '/', to: '_list/ccindex/countriesByFirstLetter', query: {key: ''}},
    {from: '/countriesByFirstLetter', to: '_list/ccindex/countriesByFirstLetter'},
    {from: '/capitalsByFirstLetter', to: '_list/ccindex/capitalsByFirstLetter'},
    {from: '*', to: '_show/not_found'}
];
