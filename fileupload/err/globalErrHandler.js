let asyncErrhandler = require("async-error-handler");

let globalErrHandler = (err, req, res, next)=> {
  const message = res?.message;
  const stack = res?.stack;
  const statusCode = res.statusCode ? res.statusCode : 500

  return res.json({
    message,
    stack,
    statusCode
  })
}

let notFoundHandler = (req, res, next)=> {
  const err = new Error (`The original route is stored in ${req.originalUrl}`);
  next(err)
}

module.exports = {
    globalErrHandler,
    notFoundHandler
}