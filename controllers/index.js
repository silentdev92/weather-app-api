import RootService from '../services/index.js'

class RootController {
  async location(req, res) {
    try {
      const { locationStatus, locationData } = await RootService.getLocation(
        req.query
      )
      res.status(locationStatus).send(locationData)
    } catch (err) {
      const { status, data } = err.response
      res.status(status).send(data)
    }
  }

  async current(req, res) {
    try {
      const { status, data } = await RootService.getCurrentWeather(req.query)
      res.status(status).send(data)
    } catch (err) {
      const { status, data } = err.response
      res.status(status).send(data)
    }
  }

  async forecast(req, res) {
    try {
      const { status, data } = await RootService.getForecastWeather(req.query)
      res.status(status).send(data)
    } catch (err) {
      const { status, data } = err.response
      res.status(status).send(data)
    }
  }
}

export default new RootController()
