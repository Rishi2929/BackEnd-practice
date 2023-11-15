import express from 'express';
import path from "path";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

mongoose.connect('mongodb://localhost:27017/', {
    dbName: "backend",
}).then(c => console.log("Database connected")).catch(e => console.log("Database not connected"));

const msgSchema = new mongoose.Schema({
    name: String, email: String,
})

const Message = mongoose.model("Message", msgSchema)
const app = express();


//Middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.set("view engine", "ejs");//Setting up view engine

app.get("/", (req, res) => {
    // res.cookie("token", "iamin");
    const { token } = req.cookies;
    if (token) {
        res.render("logout",);
    } else {

        res.render("login",);

    }
});

app.post("/login", (req, res) => {
    res.cookie("token", "iamin", {
        httpOnly: true,
    });
    res.redirect("/")
})


app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    res.redirect("/")
})



app.get("/about", (req, res) => {
    res.status(400).send("About Page not found")
})

app.get("/success", (req, res) => {
    res.render("success");
})
app.post("/", async (req, res) => {
    const { name, email } = req.body;

    await Message.create({ name, email });
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
