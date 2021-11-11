import express from 'express'
import bodyParser from 'body-parser'
import queryString from 'querystring'

import { data, logger } from './config.js'
import { testRouter } from './testApi.js'
import { patientRouter } from './patientApi.js'

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/physicians', testRouter)
app.use('/schedule', patientRouter)

app.listen(data.PORT, () => {
  logger.info(`App started and listening on port ${data.PORT}`)
})
