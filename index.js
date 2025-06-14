const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //true Para 465, false Para as Outras
    auth: {
        user: '', //Seu E-mail
        pass: '',      //Sua Senha
    }
});

transport.sendMail({
    from: ' <>',  //'Nome <E-mail>'
    to: '',                 //E-mail do Destinatário
    subject: '', //Titulo Principal
    html: '',   //Mensagem
    text: '',  //Mensagem...
})

.then(() => console.log('Email Enviado com Sucesso!'))
.catch((err) => console.log('Erro ao Enviar o Email: ',err));
