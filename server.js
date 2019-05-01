const express = require('express')
const logger = require('basic-console-logger')

const app = express()

const port = process.env.PORT || 3000
app.listen(port, () => logger.info(`Server listening on port ${port}`))
