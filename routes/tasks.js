const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

//CREATE TASK
router.post("/", async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false });
        res.status(201).send({ message: "Task successfully created", task });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

//GET TASKS

router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        console.error(error);
    }
});

//GET TASK BY ID

router.get("/:_id", async(req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the task with _id number: " +
                req.params._id,
        });
    }
})



//UPDATE TASK title only

router.put("/:_id", async(req, res) => {
        try {
            const { title, completed } = req.body; // agregue el complete para que al intentar cambiarlo tire el mensaje de error
            if (!title) {
                return res.status(400).send({ message: "Title is required" });
            }
            if (completed !== undefined) {
                return res.status(400).send({ message: "You cannot change the 'completed' field from this endpoint" }); // aca esta
              }

            const task = await Task.findByIdAndUpdate(req.params._id,
                {title}, 
                { new: true });

                if (!task) return res.status(404).send({ message: "Task not found" });

            res.send({ message: "task successfully updated", task });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem updating the task" });
        }
    }),

    //DELETE TASK

    router.delete("/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            res.send({ message: "task deleted", task });
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .send({ message: "There was a problem trying to delete a task" });
        }
    })
module.exports = router;