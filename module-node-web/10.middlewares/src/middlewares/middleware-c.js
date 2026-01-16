module.exports = function (req, res, next) {
  console.log('Middleware C executed');
  req.middlewareC = 'OK';
  next();
}
