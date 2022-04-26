import mongoose from "mongoose"
mongoose.connect(process.env.DB_URL);



const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const errorMessage = (error) => console.log(error);

db.on("error", errorMessage);
db.once("open", handleOpen);
//open되면 실행

//mongoose는 mongodb랑 연결해주는 일종의 API