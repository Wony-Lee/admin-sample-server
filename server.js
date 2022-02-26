const express = require('express')
const app = express();
const port = 4444;
const cors = require('cors')
const dotenv = require("dotenv");
const passport = require('passport')
const morgan = require('morgan');
const db = require('./models');

const menuRouter = require('./routes/menu')

dotenv.config()

db.sequelize.sync().then(() => {
    console.log(`DB CONNECTED SUCCESS`)
}).catch((e) => {
    console.error(`DB CONNETED FAILURE`, e)
})

if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined"))
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }))
} else {
    app.use(morgan("dev"))
    app.use(cors({
        origin: true,
        credentials: true
    }))
}

app.use('/menu', menuRouter)

app.listen(port, () => {
    console.log(`server START localhost:${port}`)
})