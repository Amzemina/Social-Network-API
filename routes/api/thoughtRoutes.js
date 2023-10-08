// Imports
const router = require('express').Router();

// Imports functions written in thoughtController.js file
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts GET all and POST thought
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, UPDATE and DELETE by iD
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions POST new reaction
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exports
module.exports = router;