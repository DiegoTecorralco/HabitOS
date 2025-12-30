import User from "../models/User.js";

const userDAO = {};

// Crear usuario
userDAO.createUser = async (userData) => {
  return await User.create(userData);
};

// Obtener usuario por userId (ID principal)
userDAO.getUser = async (userId) => {
  return await User.findOne({ userId: userId });
};

// Obtener usuario por cualquier campo
// Ejemplo: { email: "correo@mail.com" }
userDAO.getUserByField = async (field) => {
  return await User.findOne(field);
};

// Obtener usuario con password (solo para login)
userDAO.getUserWithPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};

// Obtener todos los usuarios
// Usar solo con permisos (admin)
userDAO.getAllUsers = async () => {
  return await User.find();
};

// Actualizar usuario por userId
userDAO.updateUser = async (userId, updateData) => {
  return await User.findOneAndUpdate(
    { userId: userId },
    updateData,
    { new: true }
  );
};

// Eliminar usuario por userId
userDAO.deleteUser = async (userId) => {
  return await User.findOneAndDelete({ userId: userId });
};

export default userDAO;
