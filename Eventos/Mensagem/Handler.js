module.exports = {
    name: "Handler",
    onMessageCreate: true,

    run: async ({ client, message }) => {

    const prefix = '!';

    if(!message) return;

    const [cmd, ...args] = message.body.slice(prefix.length).trim().split(" ");

    let command = client.commands.get(cmd) || client.commands.find(c => c.aliases?.includes(cmd))

    if (!command) {


        const body = message.body
        let cd = client.commands.get(body) || client.commands.find(c => c.aliases?.includes(body));
        if (!cd) return;
        if (cd.noPrefix) command = cd


    }

    if (command.noPrefix) {

        const body = message.body
        let cd = client.commands.get(body) || client.commands.find(c => c.aliases?.includes(body));
        if (!cd) return;
        if (cd.noPrefix) command = cd

    }

    const chat = await message.getChat();
    const contact = await message.getContact();

    if (command.privateOnly && chat.isGroup) return;
    if (command.groupOnly && !chat.isGroup) return;
    if (command.deactivated) return;
    await command.run({ client, message, args, chat, contact });

    }
}