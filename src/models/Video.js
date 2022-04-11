//mongoose에게 데이터 모델을 만들어주는것(데이터가 어떻게 생겼는지)
//ex 제목은 string이고 영어야! 라는 모델
//그걸 schema라고 알려져있음
import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    title: {type : String, required: true, trim:true, manLength: 80},
    description: {type : String, required: true, trim:true, minLength: 3},
    creationDate: {type: Date, required : true, default: Date.now },
    hashTags: [{type: String, trim:true}],
    metaData: {
        views: {type: Number, default: 0, required: true},
        rating: {type: Number, default: 0, required: true}
    }
});
//trim은 스키마의 요소를 설정할수있는 옵션임 그냥 부가적인 요소
//ex trim은 양쪽 스페이스(빈공간)을 없애줌

const videoModel = mongoose.model("Video", videoSchema);
//여기서 videoModel의 이름은 Video임
//schema 다음 model 그리고 collection 그리고 db
export default videoModel;

