const express = require("express")
const { Menu } = require('../models')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const menuList = await Menu.findAll({
            order: [
                ["id", "DESC"]
            ]
        })
        res.status(200).json(menuList)
    } catch (e) {
        console.error(e)
        next(e)
    }
})

module.exports = router;