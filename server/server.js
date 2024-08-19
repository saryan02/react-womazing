
const express  = require('express')
const cors = require("cors")
const app = express()
const port = 4000;
const pool = require("./database")
const {response} = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');


app.use(express.json())



module.exports = function (app) {


    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
        })
    );


    app.get('/data', async (req, res) => {


        pool.getMerchants().then(response => {
            res.status(200).send(response)
        })
    })


    app.listen(port, () => console.log(`app listening${port}`))
}