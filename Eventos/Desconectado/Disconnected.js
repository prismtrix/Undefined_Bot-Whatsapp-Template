module.exports = {
    name: "Desconectado",
    onDisconnected: true,

    run: async ({ reason }) => {

        console.log('Cliente Foi Desconectado Por: ', reason);

    }
}