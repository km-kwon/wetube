import express from "express";
import morgan from "morgan";
const PORT  = 4000;
const app = express();
const logger = morgan("dev");
//morgan 흠.. logger임 그냥 뭐 사용된 메소드나 아니면 경로같은거 보여주는


const handleHome = (req,res) =>{
    return res.send("hello");
}
const handleLogin = (req,res) => {
    return res.send("login");
}
app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleServer = () => console.log(`server start to ${PORT}`);
/**
 == const handleServer = function() {
     conosle.log("serverlisaf");
 }
*/
app.listen(PORT, handleServer);
/* app.listen 은 말그대로 request를 listen
 하는거임 ${PORT}포트로 누가 들어간 행동을 listen
 4000번 창문을 열어서 누가 들어오나 확인하는 거지
*/