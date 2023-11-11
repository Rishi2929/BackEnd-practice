import express from 'express';
// import path from "path"
const app = express();

app.set("view engine", "ejs");//Setting up view engine

app.get("/", (req, res) => {
    res.render("index", { name: "Rishi" });

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