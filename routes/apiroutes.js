const router = require("express").Router();

const Workout = require("../models");

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

router.delete("/")

// app.post("/submit", (req, res) => {
//     console.log(req.body);

//     db.notes.insert(req.body, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(data);
//         }
//     });
// });

// app.get("/all", (req, res) => {
//     db.notes.find({}, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.json(data);
//         }
//     });
// });

// app.get("/find/:id", (req, res) => {
//     db.notes.findOne(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(data);
//             }
//         }
//     );
// });

// app.post("/update/:id", (req, res) => {
//     db.notes.update(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         {
//             $set: {
//                 title: req.body.title,
//                 note: req.body.note,
//                 modified: Date.now()
//             }
//         },
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(data);
//             }
//         }
//     );
// });

// app.delete("/delete/:id", (req, res) => {
//     db.notes.remove(
//         {
//             _id: mongojs.ObjectID(req.params.id)
//         },
//         (error, data) => {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(data);
//             }
//         }
//     );
// });

// app.delete("/clearall", (req, res) => {
//     db.notes.remove({}, (error, response) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(response);
//         }
//     });
// });