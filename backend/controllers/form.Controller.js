const SubmitForm = require('../models/form.model')
const mongoose = require('mongoose')

// // get all workouts
// const getWorkouts = async (req, res) => {
//   const workouts = await Workout.find({}).sort({createdAt: -1})

//   res.status(200).json(workouts)
// }

// // get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findById(id)

//   if (!workout) {
//     return res.status(404).json({error: 'No such workout'})
//   }
  
//   res.status(200).json(workout)
// }


// create new workout
const createform = async (req, res) => {
  const { contactNumber, email,fullName ,password,userName} = req.body

  let emptyFields = []

  // if(!confirmPassword) {
  //   emptyFields.push('confirmPassword')
  // }
  if(!contactNumber) {
    emptyFields.push('contactNumber')
  }
  if(!email) {
    emptyFields.push('email')
  }

  if(!fullName) {
    emptyFields.push('fullName')
  }
  if(!password) {
    emptyFields.push('password')
  }
  if(!userName) {
    emptyFields.push('userName')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const form = await SubmitForm.create({ contactNumber, email,fullName ,password,userName})
    res.status(200).json(form)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// // delete a workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndDelete({_id: id})

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// // update a workout
// const updateWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }


module.exports = {
  // getWorkouts,
  // getWorkout,
  createform,
  // deleteWorkout,
  // updateWorkout
}