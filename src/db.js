import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/wetube");



const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const errorMessage = (error) => console.log(error);

db.on("error", errorMessage);
db.once("open", handleOpen);
//open되면 실행