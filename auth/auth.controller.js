const router = require("express").Router()
const { nextTick } = require("process")
const getReportsService = require("./auth.service.js")

router.get("/gettoken", getToken)

async function getToken(req, res, next) {
    getReportsService.getToken(req.body)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => nextTick(err))
}
module.exports = router