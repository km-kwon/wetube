import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter.js";
import user from "./routers/userRouter.js";
import video from "./routers/videoRouter.js";
//export default 했으니 하나의 변수로써 가지고오면서 정의 

const PORT  = 4000;
const app = express();
const logger = morgan("dev");
app.set("views", "src/views");
app.set("view engine", "pug");
app.use(logger);
//morgan 흠.. logger임(유용한 패키지) 그냥 뭐 사용된 메소드나 아니면 경로같은거 보여주는
app.use(express.urlencoded({extended: true}));
//express 는 form을 인식 못함 그래서 이 문장 써주면 부야! 작동되쥬
//req.body라는 걸로 전달함 특정 url에서 쏴주는 거임(js 표현식 같은것)

app.use("/", global);
app.use("/videos", video);
app.use("/users", user);
//라우터 내에 함수를 넣어줘야댐


















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