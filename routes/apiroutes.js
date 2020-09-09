const router = require("express").Router();

const model = require("../models");

router.get("/api/workouts", (req, res) => {
    model.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    model.Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    })
})

router.delete("/")

app.post("/api/workouts", (req, res) => {
    console.log(req.body);

    model.Workout.insertOne(req.body, (error, data) => {
        if (error) {
            res.json(error);
        } else {
            res.json(data);
        }
    });
});

app.put("/api/workouts/:id", (req, res) => {
    model.Workout.update(
        {
            _id: mongojs.ObjectID(req.params.id)
        },
        (error, data) => {
            if (error) {
                res.json(error);
            } else {
                res.json(data);
            }
        }
    );
});

// app.delete("/clearall", (req, res) => {
//     db.notes.remove({}, (error, response) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(response);
//         }
//     });
// });