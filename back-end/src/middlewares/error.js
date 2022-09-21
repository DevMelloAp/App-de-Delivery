const { StatusCodes } = require('http-status-codes');

const errorMiddleware = (err, _req, res, _next) => {
  const { name, message } = err;
  console.log(err.stack);
  switch (name) {
    case 'ValidationError': res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case 'NotFoundError': res.status(StatusCodes.UNAUTHORIZED).json({ message });
      break;
    case 'NotFound': res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError': res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default: res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
      break;
  }
};
module.exports = errorMiddleware;
