module.exports = {
  //database: 'mongodb://derek:RogueLeader1@ds131340.mlab.com:31340/financeapp',
  //secret: 'yoursecret'
  database: process.env.NODE_DB,
  secret: process.env.NODE_DB_SECRET
}
