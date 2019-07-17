const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //test to make sure we have access to user and auth is working
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}