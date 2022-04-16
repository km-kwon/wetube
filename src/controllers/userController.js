import User from "../models/User.js";


export const getJoin = (req,res) => res.render("Join",{
    pageTitle: "Join"
});
export const postJoin = async (req,res) =>{
    const { username, email, password, name, location } = req.body;
    await User.create({
        username,
        email,
        password,
        name,
        location
    });
    console.log(req.body);
    //비밀번호 암호화를 위해 bcrypt란걸 사용할껀데 
    //해커가 해싱된 password를 가지고 할수 있는 공격이 있다.
    //그게 바로 rainbow table
    return res.redirect("/login");
};
export const login = (req,res) => res.send("login");

export const logout = (req,res) => res.send("logout");
export const edit = (req,res) => res.send("edit user");
export const deleteUser = (req, res) => res.send("delete");
export const profile = (req, res) => res.send("profile");
