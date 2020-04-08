import crypto from 'crypto';
import User from '../models/User';
import nodemailer from '../../modules/nodemailer';

class EmailController {
  async forgotPassword(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user)
        return res.status(400).json({ error: 'User email not found.' });

      const token = crypto.randomBytes(3).toString('hex');

      const expirationTime = new Date();

      expirationTime.setHours(expirationTime.getHours() + 1);

      await user.update({
        password_reset_token: token,
        password_reset_expires: expirationTime,
      });

      nodemailer.sendMail(
        {
          to: email,
          subject: 'Solicitação de troca de senha - Ecommerce',
          template: 'PasswordRecovery',
          context: {
            name: user.name,
            link: `http://url/recoveryPassword/?token=${token}&email=${email}`,
          },
        },
        function(error) {
          if (error) {
            return res
              .status(400)
              .json({ error: 'Error on sending recovery password email.' });
          }
          return res.send();
        }
      );
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Error on trying to recover password.' });
    }
  }

  async resetPassword(req, res) {
    const { email, token, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(400).json({ error: 'User not found.' });

      if (token !== user.password_reset_token)
        return res.status(400).json({ error: 'Invalid token.' });

      const now = new Date();

      if (now > user.password_reset_expires)
        return res
          .status(400)
          .json({ error: 'Token expired, generate a new one.' });

      await user.update({
        password,
        password_reset_token: null,
        password_reset_expires: null,
      });

      return res.send();
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'Cannot reset password, try again.' });
    }
  }
}

export default new EmailController();
