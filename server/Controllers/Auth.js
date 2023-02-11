const express = require("express");

const User = require("../Models/User-Model");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../Helpers/Jwt");
const { update } = require("../Models/User-Model");

//Registro usuario
const userRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Controlo si existe el mail
    let usr = await User.findOne({ email });

    if (usr) {
      return res.status(400).json({
        ok: false,
        msg: "El Email ya esta en uso!",
      });
    }

    usr = new User(req.body);
    //console.log(req.body);

    //Encriptador de Contrasena
    const salt = bcrypt.genSaltSync();
    usr.password = bcrypt.hashSync(password, salt);

    //Guardo en Base
    await usr.save();

    //Genero el JWT
    const jwtToken = await generateJWT(usr.id, usr.name);

    res.status(201).json({
      ok: true,
      uid: usr.id,
      name: usr.name,
      jwtToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores al ingresar los datos!",
    });
  }
};

//Login Usuario
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Controlo si existe el mail
    const usr = await User.findOne({ email });

    if (!usr) {
      return res.status(400).json({
        ok: false,
        msg: "Email Incorrecto!",
      });
    }

    //Confirmo las pass
    const validPassword = bcrypt.compareSync(password, usr.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña Incorrecta",
      });
    }

    //Genero el JWT
    const jwtToken = await generateJWT(usr.id, usr.name);

    res.json({
      ok: true,
      uid: usr.id,
      name: usr.name,
      surname: usr.surname,
      address: usr.address,
      city: usr.city,
      celnumber: usr.celnumber,
      email: usr.email,
      jwtToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores al ingresar los datos!",
    });
  }
};

//Renovacion de JWT
const tokenRenew = async (req, res) => {
  const { uid, name } = req;

  //Genero nuevo jwt
  const jwtToken = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    jwtToken,
  });
};

const userUpdateProfile = async (req, res) => {
  //const user = await User.findOne(req.body.id);
  const ObjectID = require("mongodb").ObjectId;
  const { uid } = req.body;
  //console.log(req.body);
  const user = await User.findOne({ _id: ObjectID(uid) });

  if (user) {
    user.name = req.body.name || user.name;
    user.surname = req.body.surname || user.surname;
    user.address = req.body.address || user.address;
    user.city = req.body.city || user.city;
    user.celnumber = req.body.celNumber || user.celnumber;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      //Encriptador de Contrasena
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(req.body.password, salt);
      //user.password = req.body.password;
    }

    const updatedUser = await user.save();
    const tokenGenerado = await generateJWT(user._id, user.name);

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      surname: updatedUser.surname,
      address: updatedUser.address,
      city: updatedUser.city,
      celnumber: updatedUser.celNumber,
      email: updatedUser.email,
      token: tokenGenerado,
    });
  } else {
    res.status(404);
    throw new Error("Usuario no Encontrado");
  }
};

const searchUser = async (req, res) => {
  try {
    //const ObjectID = require("mongodb").ObjectId;
    //const { uid } = req.body;
    //const user = await User.findOne({ _id: ObjectID(uid) });
    const user = await User.find({});

    if (user) {
      res.json(user);
    }
    return true;
  } catch (error) {
    res.status(404);
    console.log(error);
    throw new Error("Usuario no Encontrado");
  }
};

module.exports = {
  userRegister,
  userLogin,
  tokenRenew,
  userUpdateProfile,
  searchUser,
};
