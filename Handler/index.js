const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

module.exports = async (client) => {

    const commandFiles = await globPromise(`${process.cwd()}/Comandos/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    const events = await globPromise(`${process.cwd()}/Eventos/**/*.js`);
    events.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.events.set(file.name, properties);
        }
    });

    const eventFiles = await globPromise(`${process.cwd()}/Init/*.js`);
    eventFiles.map((value) => require(value)
    );
};