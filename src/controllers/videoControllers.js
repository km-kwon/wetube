let videos = [
    {
        title:"video 1",
        rating: 5,
        comments: 2,
        createdAt: "2minutes ago",
        views: 59,
        id: 1
    },
    {
        title:"video 2",
        rating: 5,
        comments: 2,
        createdAt: "2minutes ago",
        views: 59,
        id: 2
    },
    {
        title:"video 3",
        rating: 5,
        comments: 2,
        createdAt: "2minutes ago",
        views: 59,
        id: 3
    }
];


export const trending = (req,res)=> {
    return res.render("home",{
        pageTitle: "home",
        videos
    });
};
//pug에서 설정한 변수는 controller에서 보낼수 있음

export const watch = (req,res) =>{
    const video = videos[(req.params.id)-1];
    return res.render("watch", {
        pageTitle: `Watching ${video.title}`,
        video
    });
};
export const getEdit = (req, res) => {
    const video = videos[(req.params.id) -1];
    return res.render("edit", {
        pageTitle: `Editing ${video.title}`,
        video
    });
};

export const postEdit = (req, res) =>{
    const id = req.params.id;
    const title = req.body.Title;
    //form의 name값을 기준으로 obj를 만듦
    videos[id-1].title = title;
    console.log(videos[id-1].title);
    return res.redirect(`/videos/${id}`);
} 



export const getUpload = (req, res) => {
    const video = videos[0];
    return res.render("upload", {
        pageTitle: "upload Video",
        video
    });
}
export const postUpload = (req,res) => {
    const newVideo = {
        title: req.body.title,
        rating: 0,
        comments: 0,
        createdAt: "just now",
        views: 3,
        id: videos.length + 1
    }
    videos.push(newVideo);
    console.log(videos);
    return res.redirect("/");
}