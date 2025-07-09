import express from "express";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";

const app = express();

app.use(express.json());

app.use(usersRouter);

app.use(postsRouter);

app.use(commentsRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})