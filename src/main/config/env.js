module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://davison:davison123@cluster0.bqgghsx.mongodb.net/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || 'secret',
  port: process.env.PORT || 5858
}
