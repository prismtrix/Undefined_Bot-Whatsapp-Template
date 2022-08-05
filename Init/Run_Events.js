const client = require("../index");
console.log('Eventos Carregados')

const events = client.events

let Ready = [];
let Message = [];
let MessageCreate = [];
let Qr = [];
let Disconnected = [];
let Deleted = [];

const filter = events.forEach((e) => {
    if (e.onReady && !e.deactivated) { Ready.push(e) }
    if (e.onMessage && !e.deactivated) { Message.push(e) }
    if (e.onMessageCreate && !e.deactivated) { MessageCreate.push(e) }
    if (e.onQr && !e.deactivated) { Qr.push(e) }
    if (e.onDisconnected && !e.deactivated) { Disconnected.push(e) }
    if (e.onDeleted && !e.deactivated) { Deleted.push(e) }
})

Ready.forEach((r) => {
    client.on('ready', async () => {
        r.run({ client })
    })
})

Message.forEach((r) => {
    client.on('message', async (message) => {
        r.run({ client, message })
    })
})

MessageCreate.forEach((r) => {
    client.on('message_create', async (message) => {
        r.run({ client, message })
    })
})

Qr.forEach((r) => {
    client.on('qr', qr => {
        r.run({ client, qr })
    });
})

Disconnected.forEach((r) => {
    client.on('disconnected', (reason) => {
        r.run({ client, reason })
    });
})

Deleted.forEach((r) => {
    client.on('message_revoke_everyone', async (after, before) => {
        r.run({ client, after, before })
    })
})