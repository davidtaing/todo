import express from 'express';
const router = express.Router();

// GET Todos
router.get(('/todos'), (req, res, next) => {
    res.send("Todos");
});

// POST Todo

// PUT Todo

// DELETE Todo

export default router;
