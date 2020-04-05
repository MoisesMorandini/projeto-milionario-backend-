import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { host, port, secure, user, pass } from '../config/nodemailer.json';

const transport = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: { user, pass },
});

transport.use(
  'compile',
  hbs({
    viewEngine: {
      defaultLayout: false,
      partialsDir: 'email/',
    },
    viewPath: 'src/resources/email',
  })
);

module.exports = transport;
