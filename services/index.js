import axios from 'axios'

const API_KEY = process.env.API_KEY

class RootService {
  async getLocation(query) {
    const { status: locationStatus, data: locationData } = await axios.get(
      'https://api.openweathermap.org/geo/1.0/direct',
      {
        params: {
          ...query,
          appid: API_KEY,
        },
      }
    )

    const countries = []

    for (const location of locationData) {
      const id = Math.round(Date.now() * Math.random())
      location.id = id

      const countryCode = location.country
      const country = countries.find((country) => country.code === countryCode)
      let currentCountry = null

      if (country) {
        currentCountry = country
      } else {
        const { data: countryData } = await axios.get(
          'https://restcountries.com/v3.1/alpha/' + countryCode.toLowerCase()
        )

        currentCountry = {
          code: countryCode,
          name: countryData[0].name.common,
        }
        countries.push(currentCountry)
      }

      location.country = currentCountry
    }
    return { locationStatus, locationData }
  }

  async getCurrentWeather(query) {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        ...query,
        appid: API_KEY,
      },
    })
  }

  async getForecastWeather(query) {
    return axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        ...query,
        appid: API_KEY,
      },
    })
  }
}

export default new RootService()
