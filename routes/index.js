const myTest = require('./test');
const home = require('./home');
module.exports = (app) => {
  app.use('/', home);
  app.use('/test', myTest);
};