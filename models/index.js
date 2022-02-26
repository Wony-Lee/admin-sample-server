const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || "development"

const config = require('../config/config.js')[env]
const db = {}

const menu = require('./menu.js')

const sequelize = new Sequelize(
    config.database,
    config.usename,
    config.password,
    config
)

db.Menu = menu;

Object.keys(db).forEach((modelName) => {
    db[modelName].init(sequelize)
})
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;