import Express from "express";
import { varifyUser } from "../Middleware/VarifyUser";
import * as userController from "../Controllers/user_controller";

const router = Express.Router();

//create user
router.post("/register", userController.registerUserHandler);

//login user
router.post("/login", userController.loginUserHandler);

//user logout
router.get("/logout", userController.logoutUserHandler);

//get all users
router.get("/getAllUser", userController.getAllUserHandler);

//get user by id
router.get("/getById/:id", userController.getUserByIdHandler);

//update user
router.put("/update/:id", varifyUser, userController.updateUserHandler);

//delete user
router.delete("/delete", varifyUser, userController.deleteUserHandler);

//subscribe user
router.put("/subscribe/:id", varifyUser, userController.subscribeUserHandler);

//add video history
router.put("/history/:id", varifyUser, userController.videoHistoryHandler);
















export default router;