const jwt = require('jsonwebtoken');
const AppError = require('../../../shared/errors/AppError');

module.exports = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('token not provided');

    const [, token] = authHeader.split(' ');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    request.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
};
