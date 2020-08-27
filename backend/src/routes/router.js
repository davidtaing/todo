import express from 'express';
const router = express.Router();

var database = [
    {
        id: "1",
        title: "Finish this project",
        completed: true,
    },
    {
        id: "2",
        title: "Learn something",
        completed: true,
    },        
    {
        id: "3",
        title: "Become a programmer",
        completed: false,
    },
];

// GET Todos
router.get(('/todos'), (req, res, next) => {
    res.status(200).json(database);
});

// POST Todo
router.post(('/todo'), (req, res, next) => {
    try {
        const payload = { id: '1234', title: 'Hello World', completed: false };
        database = database.concat(payload);

        res.status(201).json(payload);
    } catch (e) {
        res.status(400).send(e);
    }
});

// PUT Todo

// DELETE Todo

export default router;
