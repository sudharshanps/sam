import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.json("Welcome to dummy backend");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});