class APIErrors {
  INVALID_OR_MISSING_ACCESS_TOKEN = {
    status: 401,
    message: "Invalid or missing access token",
  };
  NOT_FOUND = {
    status: 404,
    message: "Not Found",
  };
  INTERNAL_SERVER_ERROR = {
    status: 500,
    message: "Internal Server Error",
  };
  INPUT_VALIDATION_ERROR = {
    status: 400,
    message: "Input Validation Error",
  };
}


function sendError(res, error, moreInfo) {
  res
  .status(error.status)
  .json({ error: `${error.message}${moreInfo ? `: ${moreInfo}` : ""}.` });
}

module.exports = {
    APIErrors,
    sendError
}