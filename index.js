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
    },
    channels: ["wjm_chatbot"]
}

const client = new tmi.client(options)

client.connect()

client.on("connected"), (address, port) => {
    client.action('wjm_chatbot', "Hello, Joe's chatbot has connected")
}