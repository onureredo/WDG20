const asyncHandler = (controller) => {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next)).catch(next);
  };
};

export default asyncHandler;
