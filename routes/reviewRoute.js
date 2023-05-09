
const {
    ajouterReview,
    getReview,
    getAllReviews,
    updateReview,
    supprimerReview
} = require('../controllers/reviewCtrl');

const reviewRouter = require("express").Router()


reviewRouter
// Get all reviews /////////
.get('/', getAllReviews)

// Get a review by its id /////////
.get('/:id', getReview)

// update /////////
.patch('/:id', protect, updateReview)

// delete /////////
.delete('/:id', protect, supprimerReview)

module.exports = reviewRouter;
