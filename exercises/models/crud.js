const User = require('./user')

const getUserById =async (id) => {
   return  await User.findById({_id:id})
}

const getAllUsers = async () => {
  return await User.find({})
}

const createUser = async (userDetails) => {
  return await User.create(userDetails)
}
const removeUserById =  (id) => {
  return  User.remove({_id:id}).exec()
}

const updateUserById = (id, update) => {
  return User.findByIdAndUpdate(id, update, {new: true}).exec()
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
