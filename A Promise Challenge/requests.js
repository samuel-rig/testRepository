const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Uneable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Uneable to fetch data')
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch('http://ipinfo.io/189.157.98.185\?token=5f863256a32b0e').then((response) =>{
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get location')
        }
    })
}