const { Router } = require('express')
const fs = require('fs')
var { vowelCount, incrementString, hexStringToRGB } = require('./katas')


async function buildRouter() {
    let router = new Router()

    router.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

    router.get('/message', (req, res) => {
        res.status(200).json({ "message": "Hello!" })
    })

    router.post('/vowelCount', (req, res) => {
        let message = req.body.message
        if (message) {
            let result = vowelCount(message)
            res.status(200).json({ "result": result})
        } else {
            res.status(400)
        }
    })

    router.post('/incrementString', (req, res) => {
        let message = req.body.message
        if (message) {
            let result = incrementString(message)
            res.status(200).json({ "result" : result})
        } else {
            res.status(400)
        }
    })

    router.post('/hexValue', (req, res) => {
        let message = req.body.message
        if (message) {
            let result = hexStringToRGB(message)
            res.status(200).json({ "result" : result})
        } else {
            res.status(400)
        }
    })

    return router
}

module.exports = {
    buildRouter: buildRouter
}