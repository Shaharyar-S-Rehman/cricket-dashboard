import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
const __dirname = path.resolve();
const PORT = process.env.PORT || 5001
const app = express()
mongoose.connect('mongodb+srv://admin:admin@cluster0.bd3rc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Cricket = mongoose.model("Cricket", {
    tournament: String,
    date: String,
    inning: String,
    teamOne: String,
    teamTwo: String,
    scoreOne: Number,
    wicketsOne: Number,
    scoreTwo: Number,
    wicketsTwo: Number,
    oversOne: String,
    overTwo: String,
    batsmanOne: String,
    batsmanOneRun: String,
    batsmanOneBall: String,
    batsmanTwo: String,
    batsmanTwoRun: String,
    batsmanTwoBall: String,
    bowlerOne: String,
    bowlerOneRun: String,
    bowlerOneBall: String,
    bowlerOneWickets: String,
    bowlerTwo: String,
    bowlerTwoRun: String,
    bowlerTwoBall: String,
    bowlerTwoWickets: String,
    toss: String,
    headline: String,
    created: { type: Date, default: Date.now },
})
app.use(express.json())
app.use(cors({
    origin: true
    // origin: ["http://localhost:3000", "http://localhost:5001"],
    // credentials: true
}))
app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})
app.post("/api/v1/cricket", (req, res) => {
    const newCricket = new Cricket({
        tournament: req.body.tournament,    
        date: req.body.date,
        inning: req.body.inning,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        wicketsOne: req.body.wicketsOne,
        scoreTwo: req.body.scoreTwo,
        wicketsTwo: req.body.wicketsTwo,
        oversOne: req.body.oversOne,
        overTwo: req.body.overTwo,
        batsmanOne: req.body.batsmanOne,
        batsmanOneRun: req.body.batsmanOneRun,
        batsmanOneBall: req.body.batsmanOneBall,
        batsmanTwo: req.body.batsmanTwo,        
        batsmanTwoRun: req.body.batsmanTwoRun,
        batsmanTwoBall: req.body.batsmanTwoBall,
        bowlerOne: req.body.bowlerOne,
        bowlerOneRun: req.body.bowlerOneRun,
        bowlerOneBall: req.body.bowlerOneBall,
        bowlerOneWickets: req.body.bowlerOneWickets,
        bowlerTwo: req.body.bowlerTwo,
        bowlerTwoRun: req.body.bowlerTwoRun,
        bowlerTwoBall: req.body.bowlerTwoBall,
        bowlerTwoWickets: req.body.bowlerTwoWickets,
        toss: req.body.toss,
        headline: req.body.headline
    });
    newCricket.save().then(() => {
        console.log("Dashboard created");

        io.emit("Cricket", {
            tournament: req.body.tournament,
            date: req.body.date,
        inning: req.body.inning,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        wicketsOne: req.body.wicketsOne,
        scoreTwo: req.body.scoreTwo,
        wicketsTwo: req.body.wicketsTwo,
        oversOne: req.body.oversOne,
        overTwo: req.body.overTwo,
        batsmanOne: req.body.batsmanOne,
        batsmanOneRun: req.body.batsmanOneRun,
        batsmanOneBall: req.body.batsmanOneBall,
        batsmanTwo: req.body.batsmanTwo,
        batsmanTwoRun: req.body.batsmanTwoRun,
        batsmanTwoBall: req.body.batsmanTwoBall,
        bowlerOne: req.body.bowlerOne,
        bowlerOneRun: req.body.bowlerOneRun,
        bowlerOneBall: req.body.bowlerOneBall,
        bowlerOneWickets: req.body.bowlerOneWickets,
        bowlerTwo: req.body.bowlerTwo,
        bowlerTwoRun: req.body.bowlerTwoRun,
        bowlerTwoBall: req.body.bowlerTwoBall,
        bowlerTwoWickets: req.body.bowlerTwoWickets,
        toss: req.body.toss,
        headline: req.body.headline
        });

        res.send("Post created");
    });
});



app.get("/api/v1/posts", (req, res) => {
    Cricket.findOne({})
    .sort({ _id: "desc" })
    .exec((err, data)=>{
        res.send(data);
    })

});

app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
    // res.redirect("/")
})
const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);
    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});
server.listen(PORT, function () {
    console.log("server is running on", PORT);
})