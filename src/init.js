import "./db";
//db.js를 import  해주므로써 mongodb에 연결됨
import videoModel from "./models/Video";
import app from "./server";



const PORT  = 4000;

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