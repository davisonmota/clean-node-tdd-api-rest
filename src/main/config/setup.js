const cors = require('../middleware/cors')
const jsonParser = require('../middleware/json-parser')
module.exports = app => {
  app.disable('x-powered-by') // disable default header express
  app.use(cors)
  app.use(jsonParser)
}
