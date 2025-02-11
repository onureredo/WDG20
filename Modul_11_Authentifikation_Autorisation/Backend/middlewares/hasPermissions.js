import ErrorResponse from '../utils/ErrorResponse.js';

export default function hasPermissions(...roles) {
  return (req, res, next) => {
    const { role, _id } = req.user;
    const { id } = req.params;

    if (roles.includes('self') && id === _id.toString()) return next();

    if (!roles.includes(role)) return next(new ErrorResponse('Not Authorized', 403));

    next();
  };
}
