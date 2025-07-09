import express from "express";
import { posts, comments } from './posts.js';

const router = express.Router({mergeParams: true});

router.use((req, res, next) => {
    const pid = req.params.postId;
    let index = posts.findIndex(post => post.id == pid);
    if (index !== -1) {
        res.status(200);
    } else {
        res.status(404);
    }
    next();
})

router.get('/posts/:postId/comments', (req, res) => {
    const pid = req.params.postId;
    res.json(comments[pid] || []);
});

router.post('/posts/:postId/comments', (req,res) => {
    const pid = req.params.postId;
    const newComment = {id: Date.now(), text: req.body.text};
    comments[pid] = comments[pid] || [];
    comments[pid].push(newComment);
    res.status(201).json(newComment);
})

export default router;