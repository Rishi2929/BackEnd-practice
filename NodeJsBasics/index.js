import express from 'express';
import path from "path"
const app = express();

app.get("/", (req, res) => {
    // res.sendStatus(404)
    res.json({
        Name: "Steve",
        Profession: "Engineer",
        Skills: []
    })
});

app.get("/about", (req, res) => {
    res.status(400).send("About Page not found")
})

app.get("/index", (req, res) => {
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation, "./index.html"))
})

app.listen(3000, () => {
    console.log("Server is working")
})