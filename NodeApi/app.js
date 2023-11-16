import express from "express";
import mongoose from 'mongoose';


const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://singhrishi2929:Qpt6VFbp2nLTOczt@cluster0.uhufrfq.mongodb.net/?retryWrites=true&w=majority', {
    dbName: "backendapi",
}).then(c => console.log("Database connected"))
    .catch(e => console.log("Database not connected"));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", schema)

app.get("/", (req, res) => {
    res.send("Nice")
})

app.get("/users/all", async (req, res) => {

    const users = await User.find({})
    console.log(req.query)
    res.json({
        success: true,
        users
    });
})
app.post("/users/new", async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password
    });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Signed up successfully"
    });
});

app.get("/userid/special", (req, res) => {
    res.json({
        success: true,
        message: "Just Joking"
    });
})

app.get("/userid/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(req.params)

    res.json({
        success: true,
        user,
    });
});


app.listen(3000, () => {
    console.log("server is working")
})