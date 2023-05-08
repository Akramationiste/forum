const mongoose = require("mongoose")

const RefJetonSchema = new mongoose.Schema(
  {
    utilisateurId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("refreshToken", RefJetonSchema)