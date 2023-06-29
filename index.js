const qrcode = require('qrcode-terminal');

const { Client, NoAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new NoAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Programa está rodando!');
});

client.on('message', message => {
    const options = ['1', '2', '3', '4']
    const content = message.body.toLowerCase()

    if (content === 'oi') {
        message.reply(
            'Olá! Bem-vindo ao atendimento da Comet Company. Por favor, digite o número correspondente à sua necessidade: 1. Informações sobre produtos 2. Rastreamento de pedidos 3. Falar com um atendente 4. Redes Sociais.'
        )
    }
    if (content === '1') {
        message.reply('Fechou! Acompanhe nosso catálogo pelo link: https://wa.me/c/556191846442')
    }
    if (content === '2') {
        message.reply('Fechou! Aguarde um de nossos atendentes te enviar o código de rastreio. Ultilize o código no site: https://rastreamento.correios.com.br/app/index.php')
    }
    if (content === '3') {
        message.reply('Fechou! Aguarde enquanto um de nossos antendentes entra em contato')
    }
    if (content === '4') {
        message.reply('Fechou! Você pode ver nossas redes sociais aqui: https://linkr.bio/Comet_Company, e acesse nosso site para não perder nenhuma novidade: https://cometcompany.com.br')
    }

});

client.initialize();
