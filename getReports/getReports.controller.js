const router = require("express").Router()
const { nextTick } = require("process")
const getReportsService = require("./getReports.service.js")

router.post("/reports", getReports)

async function getReports(req, res, next) {
    getReportsService.getReports(req.body)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => nextTick(err))
}
module.exports = router