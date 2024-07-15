const express = require('express')
const {
  createform,
  // getWorkouts,
  // getWorkout,
  // deleteWorkout,
  // updateWorkout
} = require('../controllers/form.Controller')

const router = express.Router()

// // GET all workouts
// router.get('/', getWorkouts)

// //GET a single workout
// router.get('/:id', getWorkout)

// POST a new form
router.post('/', createform)

// // DELETE a workout
// router.delete('/:id', deleteWorkout)

// // UPDATE a workout
// router.patch('/:id', updateWorkout)


module.exports = router