const express = require('express');
const accountsRouter = require("./accounts/accounts.routes")

const server = express();

server.use(express.json());

server.use("/api/accounts",accountsRouter)

server.use((err,req,res,next) => {
    const {status,message} = err;
    res.status(status).json({
        message,
    })
})

module.exports = server;