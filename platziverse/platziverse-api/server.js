'use strict'

const http = require('http') //import http from 'http'
const chalk = require('chalk')
const express = require('express') //import express from 'express'

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`${chalk.green('[platziverse-api')} server listening on port ${port}`)
})

