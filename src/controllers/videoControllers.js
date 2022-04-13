import Videos from "../models/Video";

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
        const videos = await Videos.find({}).sort({creationDate: "asc"});
        //await 는 funcion안에서만 가능 그 funcion에 async를 붙혀주는 국룰
        //sort 는 asc는 creationDate요소를 오름차순
        return res.render("home",{pageTitle: "home", videos});
    }catch(error){
        return res.render("error occur: ", error);
    }
};
//pug에서 설정한 변수는 controller에서 보낼수 있음

export const watch = async(req,res) =>{
    const {id} = req.params;
    // == const id = req.params.id;
    //req.params는 router가 주는 express의 기능
    const video = await Videos.findById(id);
    if(video){
        return res.render("watch", {pageTitle: video.title, video});
    }else{
        return res.render("404", {pageTitle: "nope video"});
    }
};
export const getEdit = async(req, res) => {
    const {id} = req.params;
    const video = await Videos.findById(id);
    if(video){
        return res.render("edit", {pageTitle: `Edit ${video.title}`, video});
    }else{
        return res.render("404");
    }
};

export const postEdit = async(req, res) =>{
    const {Title, description, hashtags} = req.body;
    const id = req.params.id;
    const video = await Videos.exists({_id: id});
    //exists는 id를 받는게 아니라 filter를 받음 즉 조건을 받아 검색하는거임
    if(!video){
        return res.render("404");
    }
    await Videos.findByIdAndUpdate(id, {
        title: Title,
        description,
        hashTags: Videos.formatHashTasgs(hashtags)
    })
    return res.redirect(`/videos/${id}`);
} 

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "upload Video"});
}
export const postUpload = async(req,res) => {
    try{
        const{ title, description, hashtags } = req.body;
        //== const title: req.body.title;
        //const video = new Videos 이렇게 해도 되고
        await Videos.create({
            title,
            description,
            hashTags: Videos.formatHashTasgs(hashtags)
        });
        //database에 저장되는 시간은 기다려 주는게 좋음 ㅋ
        return res.redirect("/");
    }catch(err){
        return res.render("upload", {pageTitle: "upload Vdieo", err});
    }
}

export const deleteVideo = async(req, res) => {
    const { id } = req.params;
    await Videos.findByIdAndDelete(id);
    return res.redirect("/");
}


export const search = async(req, res) =>{
    const {keyword} = req.query;
    //express가 query를 똿 만들어줘서 url name값에 접근하기 쉬워용
    //ex) youtube의 https://www.youtube.com/results?search_query=홀리시발
    let videos = [];
    if(keyword){
            videos = await Videos.find({
            title: keyword
        });
    }
    console.log(videos);
    return res.render("search", {
        pageTitle: "Search",
        videos
    });
}