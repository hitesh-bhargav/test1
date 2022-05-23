const { google } = require('googleapis')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const getAuth = async () => {
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
        return err.message
    }
}

module.exports = {
    getAuth
}