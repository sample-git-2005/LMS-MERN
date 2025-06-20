import mongoose from "mongoose";


const lectureSchema=new mongoose.Schema({
    lectureId:{type:String, require:true},
    lectureTitle:{type:String, require:true},
    lectureDuration:{type:Number, require:true},
    lectureUrl:{type:String, require:true},
    isPreviewFree:{type:Boolean,require:true},
    lectureOrder:{type:Number, require:true},

},{_id:false});

const chapterSchema=new mongoose.Schema({
    chapterId:{type:String, require:true},
    chapterOrder:{type:Number, require:true},
    chapterTitle:{type:String, require:true},
    chapterContent:[lectureSchema]
},{_id:false});

const courseSchema=new mongoose.Schema({
    courseTitle:{type: String, required:true},
    courseDescription:{type: String, required:true},
    courseThumbnail:{type: String},
    coursePrice:{type: Number, required:true},
    isPublished:{type: Boolean, default:true},
    discount:{type: Number, required:true, min:0, max:100},
    courseContent:[chapterSchema],
    courseRatings:[
        {userId: {type:String}, rating:{type:Number, min:1,max:5}}
    ],
    educator:{type:String, ref:'User', required:true},
    enrolledStudents:[
        {type:String, ref:'User'}
    ],
},{timestamps:true,minimize:false});

const Course=mongoose.model('Course',courseSchema)

export default Course;