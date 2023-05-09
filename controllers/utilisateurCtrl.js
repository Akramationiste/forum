const Utilisateur = require("../models/utilisateur")
// const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")

// //Create user
// exports.creerUtilisateur = expressAsyncHandler(async (req, res) => {
//   try {
//     const { password, ...body } = req.body
//     const utilisateur = await Utilisateur.create({
//       ...body,
//       passw: await bcrypt.hash(req.body.password, 10),
//     })}
// })


///////////////////////////////////////////////

//Update a user
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.user._id
    await Utilisateur.findByIdAndUpdate(id, req.body)
    res.status(200).json("User updated!")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

//Delete a user
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    await Utilisateur.findByIdAndDelete(id)
    res.status(202).json("User deleted Successfully:")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})
//Delete his account
exports.autoDelete = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.user._id
    await Utilisateur.findByIdAndDelete(id)
    res.status(202).json("User deleted Successfully:")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})