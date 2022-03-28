import express from "express";

const PORT  = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`goin to ${req.url}`);
    //자 여기서 req는 get method를 타고온 겁니다.
    next();
};
const handleHome = (req, res) => {
    return res.send("home");
};

app.get("/", handleHome);

app.use(logger);
//누군가가 "/"페이지 즉 root 페이지로 get request를 보낸다면!!!  콜백 함수 시행













const handleServer = () => console.log(`server start to ${PORT}`);
/**
 == const handleServer = function() {
     conosle.log("serverlisaf");
 }
*/
app.listen(PORT, handleServer);
/* app.listen 은 말그대로 request를 listen
 하는거임 ${PORT}포트로 누가 들어간 행동을 listen*/