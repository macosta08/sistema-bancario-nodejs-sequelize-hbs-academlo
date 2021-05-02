const express = require("express");
const db = require("../config/database");
const Clients = require("../models/clients");
const router = express.Router();

// Get Clients list
router.get("/", async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.render("clientes", {
      clients,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/listar", async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Add a client
router.post("/", async (req, res) => {
  const data = req.body;

  const {
    nombre: first_name,
    apellido: last_name,
    correo: email,
    tel: telephone,
  } = data;

  try {
    const client = await Clients.create({
      first_name,
      last_name,
      email,
      telephone,
    });
    res.redirect("/clientes");
  } catch (error) {
    console.log({ message: error.message });
  }
});

module.exports = router;
