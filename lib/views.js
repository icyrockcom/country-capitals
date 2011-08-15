/**
 * Show functions to be exported from the design doc.
 */

exports.countriesByFirstLetter = {
    map: function(doc) {
        if(doc.type = 'countryCapital') {
            emit(doc.country.charAt(0).toLowerCase(), {
                country: doc.country,
                capital: doc.capital
            })
        }
    }
}

exports.capitalsByFirstLetter = {
    map: function(doc) {
        if(doc.type = 'countryCapital') {
            emit(doc.capital.charAt(0).toLowerCase(), {
                country: doc.country,
                capital: doc.capital
            })
        }
    }
}

