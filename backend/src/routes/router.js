import express from 'express';
const router = express.Router();

// GET Todos
router.get(('/todos'), (req, res, next) => {
    const result = [
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

    res.status(200).json(result);
});

// POST Todo

// PUT Todo

// DELETE Todo

export default router;
