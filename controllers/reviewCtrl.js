const ReviewModel = require("../models/review");
const expressAsyncHandler = require("express-async-handler");


// Add review ///////////////
exports.ajouterReview = expressAsyncHandler(async (req, res) => {
  try {
    const { titre, texte } = req.body;
    const review = await ReviewModel.create({
      titre,
      texte,
      auteur: req.user._id,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// get review /////////////
exports.getReview = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const review = await ReviewModel.findById(id).populate("auteur", "-mot_de_passe -__v");
    if (!review) {
      res.status(404);
      throw new Error("Review inexistant");
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Get all reviews  ////////////////////
exports.getAllReviews = expressAsyncHandler(async (req, res) => {
  try {
    const reviews = await ReviewModel.find({})
      .populate("auteur", "-mot_de_passe -__v")
      .sort("-createdAt");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Update reviews ////////////////
exports.updateReview = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, texte } = req.body;
    const review = await ReviewModel.findById(id);
    if (!review) {
      res.status(404);
      throw new Error("Review inexistant");
    }
    if (review.auteur.toString() !== req.utilisateur._id.toString()) {
      res.status(401);
      throw new Error("Not allowed");
    }
    review.titre = titre;
    review.texte = contenu;
    const reviewModifie = await review.save();
    res.status(200).json(reviewModifie);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Delete reviews ////////////
exports.supprimerReview = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const review = await ReviewModel.findById(id);
    if (!review) {
      res.status(404);
      throw new Error("Review inexistant");
    }
    if (review.auteur.toString() !== req.utilisateur._id.toString()) {
      res.status(401);
      throw new Error("Not allowed");
    }
    await review.remove();
    res.status(202).json("Review supprimé");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
