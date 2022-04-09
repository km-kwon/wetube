import videoModel from "../models/Video";

/*
callback이란 ex video.find(변수, function) 이라고 했을때 find 랑 function이
동시에 실행되지 않음 funcion에서 결과가 나와야 find가 실행됨 (기다리는 거지)
그래서 문제가 생김 ㅅㅂ 봐봐 home을 예를 들면 render가 끝나고 console.log("error")
가 출력됨 그래서 render를 callback안에 넣야됨
이 문제를 해결할 방법
1. callback
export const home = (req,res)=> {
    Video.find({}, (error, videos) => {
        console.log("error:" + error);
        console.log("videos: " + videos);
        console.log("search finished");
        return res.render("home",{pageTitle: "home", videos: []});
    });
};
혹은 아래같은 방법 (이게 더 깔끔하고 세련된듯 ㅋ)
2. promise
*/
export const home = async(req,res)=> {
    try{
        const videos = await videoModel.find({});
        //await 는 funcion안에서만 가능 그 funcion에 async를 붙혀주는 국룰
        console.log(videos);
        return res.render("home",{pageTitle: "home", videos});
    }catch(error){
        return res.render("error occur: ", error);
    }
};
//pug에서 설정한 변수는 controller에서 보낼수 있음

export const watch = (req,res) =>{
    return res.render("watch", {pageTitle: `Watching`});
};
export const getEdit = (req, res) => {
    return res.render("edit", {pageTitle: `Editing`});
};

export const postEdit = (req, res) =>{
    const id = req.params.id;
    const title = req.body.Title;
    //form의 name값을 기준으로 obj를 만듦
    return res.redirect(`/videos/${id}`);
} 

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "upload Video"});
}
export const postUpload = async(req,res) => {
    try{
        const{ title, description, hashtags } = req.body;
        //== const title: req.body.title;
        const video = new videoModel({
            title,
            description,
            hashTags: hashtags.split(",").map(each => `#${each}`)
        });
        await video.save();
        //database에 저장되는 시간은 기다려 주는게 좋음 ㅋ
        return res.redirect("/");
    }catch(err){
        return res.render("upload", {pageTitle: "upload Vdieo", err});
    }
}