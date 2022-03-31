import express from "express";
import { trending, search } from "../controllers/videoControllers";
import { join, login } from "../controllers/userController";


//객체형식 import는 controller의 함수명 그대로 가지고 와야댐

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/search", search);

globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
// export default 변수나 함수 즉 특정한 "변수" 로써 export
// export 는 객체 형식으로