module.exports = {
    name: "DeletedMessage",
    onDeleted: true,

    run: async ({ client, before }) => {

        if(before.from === 'status@broadcast') return;
        console.log(`Mensagem Deletada: ${before.from}: ${before.body}`)
    }
}