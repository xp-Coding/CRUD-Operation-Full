import express from "express"
import { createUser, deleteUser, readSingleUser, readUser, updateUser } from "../controller/userController.js"

const router = express.Router()

//create
router.post("/users", createUser)

//get All users
router.get("/users", readUser)

// get Single user
router.get("/users/:id", readSingleUser)

//update user
router.put("/users/:id", updateUser)

// delete user
router.delete("/users/:id", deleteUser)

export {router}