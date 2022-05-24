const { getAuth } = require("../auth.js")
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const analyticsDataClient = new BetaAnalyticsDataClient();

const isNull = (payload) => payload == null || payload == undefined ? true : false

const getReports = async (reqParam) => {
    try {
        // let token = await getAuth()
        // if (isNull(token)) {
        //     return "Error in access token!!!"
        // }
        let token = "ya29.c.b0AXv0zTPx05-8lCrFVfuEnFwUsbXjgv34YlIGPUZG8seIUV1bo8MMG2MTij9s3hDtCmYD50R-YC-XvMq4quCYYaWAGD6aRhiWea-xKAz02NCsDaBuf61P0PxobcQDY53YzSmAB1Q2mTC6PfISAKZAm-YKOx7mWdecIshoGFLgvUFa4mmexslyrV_XUOVlcBpk6A4KVOEczd0A5jzaHdcT00P-kUYEKQ"
        const [response] = await analyticsDataClient.runReport({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            property: `properties/${process.env.GA_PROPERTY_ID}`,
            ...reqParam
        });
        console.log('Report result:');
        response.rows.forEach(row => {
            console.log(row.dimensionValues[0], row.metricValues[0]);
        });
        return response
    } catch (err) {
        console.log('err.code >>>', err.code)
        console.log('err.message >>>', err.message)
        return { errCode: err.code, errMessage: err.message }
    }
}
module.exports = {
    getReports
}