const {
    ajouterUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoDelete
    
  } = require("../controllers/utilisateurCtrl")

  const utilisateurRouter = require("express").Router()
  
  utilisateurRouter
    .post("/ajouter", ajouterUtilisateur)
    .patch("/modifier", modifierUtilisateur)
    .delete("/supprimer/:id", supprimerUtilisateur)
    .delete("/supprimer", autoDelete)
  
  module.exports = utilisateurRouter