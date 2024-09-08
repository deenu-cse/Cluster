const cluster = require("node:cluster")
const os = require("os")
const express = require("express")
const app = express()


const TotalCpu = os.cpus().length

if (cluster.isPrimary) {
    for (let i = 0; i < TotalCpu; i++) {
        cluster.fork()
    }
} else {

    app.get('/', (req, res) => {
        return res.send("Hellow from express")
    })

    app.listen(5000, () => {
        console.log(`Port is 5000 : ${process.pid}`)
    })
}