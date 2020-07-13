const tmi = require('tmi.js')

const options = {
    options: {
        debug: true

    },
    connection: {
        cluster: 'aws',
        reconnect: 'true'
    },
    identity: {
        username: "TestChabot",
        password: "oauth:2abwpv1gmb1ooash4fmgv7qm6hficb"
    }
}