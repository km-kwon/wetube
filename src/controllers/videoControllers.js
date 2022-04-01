export const trending = (req,res)=> {
    const videos = [
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
            id: 1
        },
        {
            title:"video 3",
            rating: 5,
            comments: 2,
            createdAt: "2minutes ago",
            views: 59,
            id: 1
        }
    ];
    return res.render("home",{
        pageTitle: "home",
        videos
    });
};
//pug에서 설정한 변수는 controller에서 보낼수 있음
export const search = (req,res) => res.send("search");

export const upload =(req,res) => res.send("upload");
export const watch = (req,res) => res.render("watch", {
    pageTitle: "watch"
});
export const edit = (req, res) => res.render("edit",{
    pageTitle: "edit"
});
export const deleteVideo = (req,res) => res.send("deleteVideo");