import express from "express";

export const posts = [{id:1, title: 'Hello'}];

export const comments = {1:[]};

const router = express.Router();

router.get('/posts', (req, res) => {
    res.json(posts);
})

router.post('/posts', (req,res) => {
    const newPost = {id: Date.now(), text: req.body.text};
    posts.push(newPost);
    comments[newPost.id] = [];
    res.status(201).json(newPost);
})

export default router;