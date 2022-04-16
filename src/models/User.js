import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, uniqe: true},
    username: {type: String, required: true, unique: true},
    //unique는 하나만 있어야한다는 뜼
    password: {type: String, required: true},
    name: {type: String, required: true},
    location: String
});

userSchema.pre("save", async function() {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 5);
    console.log(this.password);
});
// 말그대로 save 되기전에 저 함수를 실행시킨다는거임
//존나 유용할거 같으니 잘 알아두기
const User = mongoose.model("User", userSchema);

export default User;