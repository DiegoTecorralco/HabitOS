import userDAO from "../DAO/userDAO.js";

const userController = {};

// Crear usuario
userController.create = async (req, res) => {
  try {
    const userData = req.body;

    // Validación básica
    if (!userData.userId || !userData.email || !userData.password) {
      return res.status(400).json({
        message: "userId, email and password are required",
      });
    }

    // Verificar si ya existe el usuario por userId o email
    const existingUser = await userDAO.getUserByField({
      $or: [
        { userId: userData.userId },
        { email: userData.email },
      ],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const newUser = await userDAO.createUser(userData);

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

// Obtener usuario por userId
userController.getOne = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userDAO.getUserByUserId(Number(userId));

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
  }
};

// Obtener todos los usuarios
userController.getAll = async (req, res) => {
  try {
    const users = await userDAO.getAllUsers();

    res.json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};

// Actualizar usuario por userId
userController.update = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const updatedUser = await userDAO.updateUserByUserId(
      Number(userId),
      updateData
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
};

// Eliminar usuario por userId
userController.delete = async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedUser = await userDAO.deleteUserByUserId(Number(userId));

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message,
    });
  }
};

// Actualizar preferencias del usuario (flujo post-registro)
userController.updatePreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const { preferences, toneMotivation } = req.body;

    const updatedUser = await userDAO.updateUserByUserId(
      Number(userId),
      {
        preferences,
        toneMotivation,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "Preferences updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating preferences",
      error: error.message,
    });
  }
};

export default userController;
