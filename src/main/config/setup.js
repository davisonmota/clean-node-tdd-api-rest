const cors = require('../middleware/cors')
module.exports = app => {
  app.disable('x-powered-by') // disable default header express
  app.use(cors)
}
