import express from 'express';
import path from "path";
import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected"))
    .catch(error => console.error("Database not connected", error));




const msgSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Message = mongoose.model("Message", msgSchema);

const app = express();
const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { name: "Rishi" });
});

app.get("/add", async (req, res) => {
    try {
        const result = await Message.create({ name: "Arvind", email: "Chirag@gmail.com" });
        console.log("Data inserted:", result);
        res.send("nice");
    } catch (error) {
        console.error("Error adding message:", error);
        res.status(500).send("Internal Server Error");
    }
});


// ... (rest of your routes)

app.listen(3000, () => {
    console.log("Server is working");
});
