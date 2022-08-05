const qrcode = require('qrcode-terminal');

module.exports = {
    name: "QrCode",
    onQr: true,

    run: async ({ qr }) => {

        qrcode.generate(qr, { small: true });

    }
}