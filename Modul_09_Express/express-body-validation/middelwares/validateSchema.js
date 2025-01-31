// import UserSchema from '../schemas/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const validateSchema = (schema) => (req, res, next) => {
  // const {
  //   body: { firstName, lastName, email },
  // } = req;
  // if (!firstName || !lastName || !email) next(new ErrorResponse('firstName, lastName, and email are required', 400));
  // next();

  const value = schema.validate(req.body, { abortEarly: false });
  // console.log(value);
  if (value.error) {
    const errResponse = new ErrorResponse(value.error, 400);
    next(errResponse);
  }
  next();
};

export { validateSchema };
