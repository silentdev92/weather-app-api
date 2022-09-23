import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(helmet())

app.listen(PORT, (err) => {
  if (err) return console.log(err)

  console.log('Server has been started on port ' + PORT)
})
