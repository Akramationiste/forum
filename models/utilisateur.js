const mongoose = require('mongoose');


//le model de l'utilisateur : 

const UtilisateurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adresse: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "proprietaire", "client"],
        required: [true, "Spécifiez votre rôle svp"]
    }
},
   {timestamps: true}
   );


   module.exports = mongoose.model('utilisateur', UtilisateurSchema);
