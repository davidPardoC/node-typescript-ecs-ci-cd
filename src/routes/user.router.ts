import { Router } from "express";

export const UserRouter = Router()

UserRouter.get("/", (req, res)=>{
    res.send("All Users")
})

UserRouter.get("/:id", (req, res)=>{
    const {id} = req.params
    res.send("A User: "+id)
})