const axios = require("axios");
const { KEYCLOAK_API_HOST, KEYCLOAK_API_PORT } = require("../config");
const { APIErrors, sendError } = require("../errors/apiErros");

const KEYCLOAK_INTEGRATION = false;

const VALIDATE_USER_ENDPOINT = `http://${KEYCLOAK_API_HOST}:${KEYCLOAK_API_PORT}/users/validate`;

module.exports = {
    checkAccessToken: async function (req, res, next) {
        if (!KEYCLOAK_INTEGRATION) {
            next();
            return;
          }
          const accessToken = req.headers.authorization;
          if (!accessToken || !accessToken.startsWith("Bearer ")) {
            sendError(res, APIErrors.INVALID_OR_MISSING_ACCESS_TOKEN);
            return;
          }
          try {
            await axios.post(VALIDATE_USER_ENDPOINT, {
              headers: {
                Authorization: accessToken,
              },
            });
            next();
          } catch (error) {
            console.error(error);
            sendError(res, APIErrors.INVALID_OR_MISSING_ACCESS_TOKEN);
          }
    }
}
