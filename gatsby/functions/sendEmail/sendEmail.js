const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function pause() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

exports.handler = async (event, context) => {
  await pause();
  const body = JSON.parse(event.body);

  // Проверка "мусорного" поля input
  if (body.garbage) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Давай, до свидания!' }),
    };
  }

  const fieldsRequired = ['email'];

  // Email - обязательное поле
  for (const field of fieldsRequired) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Введите ${field}`,
        }),
      };
    }
  }

  await transporter.sendMail({
    from: 'Fresh Blog <signup@freshblog.ru>',
    to: `<${body.email}>, info@myemail.com`,
    subject: 'Рассылка Fresh Blog',
    html: `<div><p>Спасибо, что подписались на нашу рассылку!</p></div>`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Transaction complete!',
    }),
  };
};
