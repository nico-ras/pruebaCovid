



export const countryData = async (country) => {
    let baseUrl = 'http://localhost:3000/api/countries/'
    let results = await fetch(`${baseUrl}${country}`)
    const response = await results.json()
    return response
}