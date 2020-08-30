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
        const payload = req.body;
        const newTodo = {
            id: payload.id, 
            title: payload.title,
            completed: payload.completed
        };

        database = database.concat(newTodo);

        res.status(201).json(newTodo);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Update Todo
router.put('/todo/:id/toggle', (req, res, next) => {
    try {
        const { id } = req.params;
        const todoIndex = database.findIndex(todo => todo.id === id);

        if (todoIndex !== -1) {
            let todoToToggle = database[todoIndex];
            let updatedTodo = {
                ...todoToToggle,
                completed: !todoToToggle.completed,
            }
            database.splice(todoIndex, 1, updatedTodo);

            res.status(200).json(updatedTodo);
        } else {
            res.status(404);
        }
    } catch (e) {
        res.status(500);
    }
})

// DELETE Todo
router.delete(('/todo/:id'), (req, res, next) => {
    try {
        const todoToDelete = database.find(todo => todo.id === req.params.id);

        if (todoToDelete) {
            database = database.filter(todo => todo.id !== todoToDelete.id);
            res.status(200).json(todoToDelete);
        } else {
            res.status(404).send("Todo not found");
        }
    } catch (e) {
        res.status(500);
    }
});

export default router;
