import { Router } from 'express'
import axios from 'axios'
const router = Router()

const API_KEY = process.env.API_KEY

router.get('/location', async (req, res) => {
  try {
    const { status, data } = await axios.get(
      'https://api.openweathermap.org/geo/1.0/direct',
      {
        params: {
          ...req.query,
          appid: API_KEY,
        },
      }
    )

    const resultData = data.map((location) => {
      const id = Math.round(Date.now() * Math.random())
      return { ...location, id }
    })

    res.status(status).send(resultData)
  } catch (err) {
    const { status, data } = err.response
    res.status(status).send(data)
  }
})

router.get('/current', async (req, res) => {
  try {
    const { status, data } = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          ...req.query,
          appid: API_KEY,
        },
      }
    )
    res.status(status).send(data)
  } catch (err) {
    const { status, data } = err.response
    res.status(status).send(data)
  }
})

router.get('/forecast', async (req, res) => {
  try {
    const { status, data } = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          ...req.query,
          appid: API_KEY,
        },
      }
    )
    res.status(status).send(data)
  } catch (err) {
    const { status, data } = err.response
    res.status(status).send(data)
  }
})

export default router
