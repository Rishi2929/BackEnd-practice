import express from 'express';
import path from "path";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/', {
    dbName: "backend",
}).then(c => console.log("Database connected")).catch(e => console.log("Database not connected"));

const msgSchema = new mongoose.Schema({
    name: String, email: String,
})

const Msg = mongoose.model("Message", msgSchema)
const app = express();
const users = [];


//Middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");//Setting up view engine

app.get("/", (req, res) => {
    res.render("index", { name: "Rishi" });

});

app.get("/add", (req, res) => {
    Msg.create({ name: "Rishi", email: "Rishi@gmail.com" }).then(() => {
        res.send("nice")

    });

});

app.get("/about", (req, res) => {
    res.status(400).send("About Page not found")
})

app.get("/success", (req, res) => {
    res.render("success");
})
app.post("/", (req, res) => {
    users.push({ username: req.body.name, email: req.body.email });
    res.redirect("/success");
});


app.get("/users", (req, res) => {
    res.json({
        users,
    });
})


app.listen(3000, () => {
    console.log("Server is working")
})
