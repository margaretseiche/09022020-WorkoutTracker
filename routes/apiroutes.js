const path = require("path");
const router = require("express").Router();

const model = require("../models");
const Workout = require("../models/Model");

// module.exports = function (router) {

    router.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    router.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err);
            })
    })

    // router.delete("/")

    router.post("/api/workouts", (req, res) => {
        console.log(req.body);

        Workout.create(req.body, (error, data) => {
            if (error) {
                res.json(error);
            } else {
                res.json(data);
            }
        });
    });

    router.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            {_id: req.params.id}, {$push: {exercises: req.body}})
            .then((error, data) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json(data);
                }
            }
        );
    });

    // router.delete("/clearall", (req, res) => {
    //     model.Workout.remove({}, (error, response) => {
    //         if (error) {
    //             res.send(error);
    //         } else {
    //             res.send(response);
    //         }
    //     });
    // });


// }

module.exports = router;