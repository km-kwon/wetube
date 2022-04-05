import express from "express"
import {watch, getEdit, postEdit, getUpload, postUpload} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
//:붙으면 변수취급  당함 :id 대신 :potato  써도됨 ㅋ
//express에게 변수인걸 알려주기 위해 :붙임
//이거 중요함 /upload가 왜 /:id 위에 있냐면 express가 upload라는 문자열을
//id로 이해해 버려서 /upload url로 이동안하고 /:id url로 이동해버리는 문제 때문
//(\\d+)는 id가 숫자일때만 인식되게끔 해주는것
//(\\w+)는 id가 string일때만 
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
/*
== videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
*/

videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;