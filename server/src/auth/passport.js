import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

import {User} from '../db'
import {hash} from '../ util'

passport.use(new LocalStrategy(async (login, password, done) => {
  // find all users with matching logins
  const users = await User.filter({ login }).limit(1).run();
  const user = users[0];
  if (!user) {
    return done(null, false);
  }
  if (user.password !== hash(password)) {
    return done(null, false);
  }
  return done(null, user);
  });
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = null;
  try {
    user = await User.get(id).run();
  } catch (e) {
    done(e, false);
    return;
  }

  done(null, user);
});
