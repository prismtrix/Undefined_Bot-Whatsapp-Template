module.exports = {
    name: "Ping",
    aliases: ["ping"],
    noPrefix: true,

    run: async ({message}) => {

        message.react('👍');
        message.reply('Pong')

    }
}