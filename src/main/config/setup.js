const cors = require('../middleware/cors')
const jsonParser = require('../middleware/json-parser')
const contentType = require('../middleware/content-type')

module.exports = app => {
  app.disable('x-powered-by') // disable default header express
  app.use(cors)
  app.use(jsonParser)
  app.use(contentType)
}
