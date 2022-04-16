import express from "express";
import { home, search } from "../controllers/videoControllers";
import { getJoin, postJoin, login } from "../controllers/userController";


//객체형식 import는 controller의 함수명 그대로 가지고 와야댐

const routeRouter = express.Router();

routeRouter.get("/", home);

routeRouter.route("/join").get(getJoin).post(postJoin);
routeRouter.get("/login", login);
routeRouter.get("/search", search);

export default routeRouter;
// export default 변수나 함수 즉 특정한 "변수" 로써 export
// export 는 객체 형식으로