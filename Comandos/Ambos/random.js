module.exports = {
    name: "dado",
    aliases: ["random", "d"],

    run: async ({message, args}) => {

        let num = args[0]
        if(!num) num = 6
        if(isNaN(num)) return message.reply('O Número De Faces Inserido Não É Um Número!')

        let random = Math.floor(Math.random() * num) + 1

        if(num == 0) random = 0
        
        message.reply(`O Dado Caiu Em *${random}*`)

    }
}