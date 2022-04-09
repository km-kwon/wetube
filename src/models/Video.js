//mongoose에게 데이터 모델을 만들어주는것(데이터가 어떻게 생겼는지)
//ex 제목은 string이고 영어야! 라는 모델
//그걸 schema라고 알려져있음
import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    title: {type : String, required: true},
    description: {type : String, required: true},
    creationDate: {type: Date, required : true, default: Date.now },
    hashTags: [{type: String}],
    metaData: {
        views: {type: Number, default: 0, required: true},
        rating: {type: Number, default: 0, required: true}
    }
});


const videoModel = mongoose.model("Video", videoSchema);
//여기서 videoModel의 이름은 Video임
//schema 다음 model 그리고 collection 그리고 db
export default videoModel;

