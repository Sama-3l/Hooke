import { Schema, model } from "mongoose";

const testSchema = new Schema({
    testname :{
        type: String,
        required: true,
        index: true,
        trim: true
    },
    description :{
        type: String,
        trim: true
    },
    questions: [
        {
            type : Schema.Types.ObjectId,
            ref: "questions"
        }
    ],
    testDuration: {
        type: Number,
        required: true,
        default: 3*60*60,  // 3 hours in second
    },
    labels : [
        {
            // We can create a list of labels to select
            type: String,
            trim: true,
        }
    ],
    isPrivate : {
        type: Boolean,
        default: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    visitorsCount: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

// export const Test = mongoose.model("Test", testSchema)
