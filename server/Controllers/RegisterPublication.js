const express = require("express");
const { default: mongoose } = require("mongoose");
const RegisterPublicationModel = require("../Models/RegisterPublication-Model");
const itemList = require("../Models/ItemList-Model");

const counterSchema = {
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
};

const counterModel = mongoose.model("counter", counterSchema);

const registerPublication = async (req, res) => {
  try {
    counterModel.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true },
      async (err, cd) => {
        let seqId;
        if (cd == null) {
          const newVal = new counterModel({ id: "autoval", seq: 1 });
          newVal.save();
          seqId = 1;
        } else {
          seqId = cd.seq;
        }

        console.log(seqId);
        let regPub = new RegisterPublicationModel(req.body);
        regPub.idPub = seqId;
        console.log(regPub);
        //Guardo en Base
        await regPub.save();

        res.status(201).json({
          ok: true,
          msg: "Agregada Correctamente!",
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores al ingresar los datos!",
    });
  }
};

const getPublications = async (req, res) => {
  try {
    const publicationsFromDB = await RegisterPublicationModel.find();
    console.log(publicationsFromDB);
    res.json({
      ok: true,
      publicationsFromDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error!",
    });
  }
};

const getPublicationsById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const publication = await RegisterPublicationModel.findOne({
      idPub: parseInt(id),
    });
    //console.log(publication);
    res.status(200).json({
      ok: true,
      publication,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error!",
    });
  }
};

const itemListRegister = async (req, res) => {
  const data = req.body;

  try {
    itemList
      .insertMany(req.body)
      .then(() => {
        res.status(201);
        res.json({
          success: true,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ errorMessage: "Error en la carga" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Errores al ingresar los datos!",
    });
  }
};

module.exports = {
  registerPublication,
  getPublications,
  getPublicationsById,
  itemListRegister,
};
