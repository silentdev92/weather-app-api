import './env.js'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes/index.js'

const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL

const corsOptions = { origin: CLIENT_URL, optionsSuccessStatus: 200 }

const app = express()
app.use(cors(corsOptions))
app.use(helmet())

app.use('/api', routes)

app.listen(PORT, (err) => {
  if (err) return console.log(err)

  console.log('Server has been started on port ' + PORT)
})
