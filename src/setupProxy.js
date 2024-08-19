
const express  = require('express')
const app = express()
const pool = require("../server/database.js")
const { createProxyMiddleware } = require('http-proxy-middleware');



app.use(express.json())




module.exports = function (app) {


    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:6000',
            changeOrigin: true,
        })
    );


    app.get('/home', async (req, res) => {


        pool.getHome().then(response => {
            res.status(200).send(response)
        })
    })
    app.get('/catalog', async (req, res) => {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 9
        const sortBy = parseInt(req.query.category) || 0

        pool.getShop(page, limit, sortBy).then(response => {
            res.status(200).send(response)
        })
    })

    app.get('/getCloth', async (req, res) => {
        const id = parseInt((req.query.id))

        pool.getCloth(id).then(response => {

            res.status(200).send(response)
        })
    })

}