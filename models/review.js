const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    texte: {
      type: String,
      required: true,
    },
    auteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "utilisateur",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("reviews", ReviewSchema);