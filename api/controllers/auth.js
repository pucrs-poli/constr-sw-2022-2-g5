const {Request, Response, NextFunction} = require( "express");
const axios = require("axios");

const realm = "constr-sw-2022-2";

// login in keycloak
const login = async (req, res) => {
  const params = {
        'client_id': 'grupo5',
        'client-secret': 'tRBObzymISf3klattAGr55x9AWtn6eC8',
        'username': 'teste@gmail.com',
        'passwordd': 'admin',
        'grant_type': 'password'
  }

  let response = await axios.post(
    `http://localhost:8080/auth/realms/${realm}/protocol/openid-connect/token`,
    params
  );

  return res.status(200).json(response.data);
};
//userinfo
const userInfo = async (req, res) => {
  let token = req.headers.authorization || "";
  let response = await axios.get(
    `http://localhost:8080/auth/realms/${realm}/protocol/openid-connect/userinfo`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  // return response
  return res.status(200).json(response.data);
};

const getUsers = async (req, res) => {
  let token= req.headers.authorization || "";

  let response = await axios.get(
    `http://localhost:8080/auth/admin/realms/${realm}/users`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return res.status(200).json(response.data);
};

const getUserById = async (req , res ) => {
  let id = req.params.id;
  let token = req.headers.authorization || "";
  let response = await axios.get(
    `http://localhost:8080/auth/admin/realms/${realm}/users/${id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return res.status(200).json(response.data);
};

const createUser = async (req , res ) => {
  let token = req.headers.authorization || "";
  console.log('body:' + req.body.toString())
  let response  = await axios.post(
    `http://localhost:8080/auth/admin/realms/${realm}/users`,
    req.body,
    {
      headers: {
        Authorization: token,
      }
    }
  );

  return res.status(201).json(response.data);
};


const updateUserData = async (req, res) => {
  let id= req.params.id;
  let token = req.headers.authorization || "";
  let response= await axios.put(
    `http://localhost:8080/auth/admin/realms/${realm}/users/${id}`,
    req.body,
    {
      headers: {
        Authorization: token,
      }
    }
  );

  return res.status(200).json(response.data);
};

const updateUserPassword = async (req, res) => {
  let id= req.params.id;
  let token= req.headers.authorization || "";
  let response= await axios.put(
    `http://localhost:8080/auth/admin/realms/${realm}/users/${id}/reset-password`,
    req.body,
    {
      headers: {
        Authorization: token,
      }
    }
  );

  return res.status(200).json(response.data);
};

module.exports = {
    login,
    userInfo,
    getUsers,
    getUserById,
    createUser,
    updateUserData,
    updateUserPassword,
};