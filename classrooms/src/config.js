
require('dotenv').config();
/*

const KEYCLOAK_API_HOST = process.env.KEYCLOAK_API_HOST || "localhost";
const KEYCLOAK_API_PORT = parseInt(
  process.env.KEYCLOAK_API_PORT || "3000"
);
*/

const MONGODB_HOST = process.env.MONGODB_HOST || "localhost";
const MONGODB_PORT = parseInt(process.env.MONGODB_PORT || "27017");
const MONGODB_USER = process.env.MONGODB_USER || "admin";
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || "a12345678";

const API_PORT = parseInt(process.env.API_PORT || "8085");

module.exports = {
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_USER,
    MONGODB_PASSWORD,
    API_PORT
}
