import './passport';
import {User} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/register', asyncRequest(async (req, res) => {
    const {login, password, passwordRepeat} = req.body;

    if (password !== passwordRepeat) {
      res.status(400).send({
        error: 'Passwords do not match!'
      })
    }

    const hashedPassword = hash(password);

    const user = new User({
      login, password: hashedPassword
    })

    await user.save();

    res.sendStatus(201);

  }))
}
