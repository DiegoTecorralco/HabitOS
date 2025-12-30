import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

// Crear usuario
userRouter.post("/createUser", userController.create);

// Obtener TODOS los usuarios
userRouter.get("/getAll", userController.getAll);

// Obtener UN usuario por userId
userRouter.get("/:userId", userController.getOne);

// Actualizar usuario por userId
userRouter.put("/update/:userId", userController.update);

// Eliminar usuario por userId
userRouter.delete("/delete/:userId", userController.delete);

// Actualizar preferencias del usuario (flujo post-registro)
userRouter.put(
  "/:userId/preferences",
  userController.updatePreferences
);

export default userRouter;
