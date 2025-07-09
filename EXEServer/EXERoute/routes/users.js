import express from "express";

let users = [{id:1, name:'alice'}]

const router = express.Router();

router.get('/users', (req, res) => {
    res.json({users});
})

router.post('/users', (req, res) => {
    const newUser = {id: Date.now(), name: req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
})

router.get('/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)));
})

router.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updateUser = {id: userId, name: req.body.name}
    const userIndex = users.findIndex(user => user.id === userId);
    users[userIndex] = updateUser;
    res.status(201).json(updateUser);
})

router.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    users = users.filter(user => user.id !== userId)
    res.status(204).send();
})

export default router;