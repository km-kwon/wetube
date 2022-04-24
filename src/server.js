import express from "express";
import morgan from "morgan";
import session from "express-session";
import mongoStore from "connect-mongo";
import routeRouter from "./routers/routeRouter.js";
import user from "./routers/userRouter.js";
import video from "./routers/videoRouter.js";
import { localsMiddleware } from "./middlewares.js";
//export default 했으니 하나의 변수로써 가지고오면서 정의 


const app = express();
const logger = morgan("dev");
app.set("views", "src/views");
app.set("view engine", "pug");
app.use(logger);
//morgan 흠.. logger임(유용한 패키지) 그냥 뭐 사용된 메소드나 아니면 경로같은거 보여주는
app.use(express.urlencoded({extended: true}));
//express 는 form을 인식 못함 그래서 이 문장 써주면 부야! 작동되쥬
//req.body라는 형식으로 전달함 특정 url에서 쏴주는 거임(js 표현식 같은것)

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        //s이건 우리가 쿠키에 sign 할때 사용하는 string임
        //backend에 쿠키를 줬다는걸 증명하는 거임
        //세션 하이재킹을 막기위함임
        resave: false,
        //모든 req마다 세션의 변경사항이 있든 없든 다시 저장함
        //usercontroller postlogin 보면 session값 수정하잖아 그때만 쿠키 날린다는 거지
        saveUninitialized: false,
        //uninitialized상태인 세션을 저장함
        //이건 req때 생성된 이후로 아무런 작업이 가해지지않는 초기상태의 세션
        //true로 하면 클라이언트들이 서버에 방문한 총 횟수를 알고자 할때 사용
        store: mongoStore.create({
            mongoUrl: process.env.DB_URL
            //세션들을 이제 여기 url에 저장함
            //show collections 하면 session 나옴
        })
    })
);
app.use(localsMiddleware);
app.use("/", routeRouter);
app.use("/videos", video);
app.use("/users", user);
//라우터 내에 함수를 넣어줘야댐




export default app;





