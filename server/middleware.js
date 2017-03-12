const path = require("path")

const USER_AGENT_KEY = "user-agent"
const MSIE_PREFIX = "MSIE"
const MINIMUM_IE_VERSION = 9

const isUnsupportedIeVersion = (minimumIeVersion, userAgent = "") => {

    if(userAgent.includes(MSIE_PREFIX)) {
        const ieVersion = Number(
            userAgent.split(";")
                .find(stringValue => stringValue.includes(MSIE_PREFIX))
                .replace(MSIE_PREFIX, "")
                .trim()
        )

        return minimumIeVersion > ieVersion
    } else {
        return false
    }
}

const verifySupportedClientBrowser = (request, response, next) => {
    const userAgent = request.get(USER_AGENT_KEY)

    if(isUnsupportedIeVersion(MINIMUM_IE_VERSION, userAgent)) {
        response.sendFile(path.join(__dirname, "../public/unsupportedBrowser.html"))
    } else {
        next()
    }
}

module.exports = {
    verifySupportedClientBrowser
}
