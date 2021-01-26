const pgp = require('pg-promise')()
const cn = 'postgres://localhost:5432/stockapp_db'
const db = pgp(cn)   


module.exports = db