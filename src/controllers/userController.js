import User from "../models/User.js";
import bycrpt from "bcrypt";

export const getJoin = (req,res) =>{
    return res.render("Join",{
        pageTitle: "Join"
    });
}
export const postJoin = async (req,res) =>{
    const { username, email, password, password2, name, location } = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("Join",{
            pageTitle,
            error: "enter same password"
        });
    }
    const exists = await User.exists({$or: 
        [{username: username}, {email: email}]
        //배열로 하나하나 조건 설정
    });
    if(exists){
        return res.status(400).render("Join",{
            //오류라고 http로 보내줘야 하기 때문에 status(400)이라고 하면 
            //http로 400코르를 쏴줌!
            pageTitle,
            error: "username or email is already exists"
        });
    }
    try{
        await User.create({
            username,
            email,
            password,
            name,
            location
        });
        //비밀번호 암호화를 위해 bcrypt란걸 사용할껀데 
        //해커가 해싱된 password를 가지고 할수 있는 공격이 있다.
        //그게 바로 rainbow table
        return res.redirect("/login");
    }catch(err){
        return res.status(400).redirect("/join", {
            pageTitle: getJoin,
            error: err
        });
    }
};
export const getLogin = (req,res) => {
    return res.render("login", {
        pageTitle: "Login"
    });
}
export const postLogin = async (req,res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).render("login",{
            pageTitle: "Login",
            error: "An account with this username does not exists"
        });
    }
    const Ok = await bycrpt.compare(password, user.password);
    if(!Ok){
        return res.status(400).render("login",{
            pageTitle: "Login",
            error: "wrong password"
        });
    }

    req.session.loggedIn = true;
    req.session.user = user;
    //req.session 객체에 user랑 loggedIn 플래그를 추가
    return res.redirect("/");
    /*
    const checkpassword = await bycrpt.hash(password, 5);
    왜 이건 안돼 ㅅㅄㅄㅂㅂㅄㅄㅂ
    */
}
export const logout = (req,res) => res.send("logout");
export const edit = (req,res) => res.send("edit user");
export const deleteUser = (req, res) => res.send("delete");
export const profile = (req, res) => res.send("profile");
