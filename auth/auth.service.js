const { google } = require('googleapis')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const getToken = async (reqParam) => {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
            scopes
        })
        const authClient = await auth.getClient();
        let token = await authClient.authorize()

        console.log('auth >>>', token)
        return token.access_token
    } catch (err) {
        console.log('err.code >>>', err.code)
        console.log('err.message >>>', err.message)
        return { errCode: err.code, errMessage: err.message }
    }
}
module.exports = {
    getToken
}