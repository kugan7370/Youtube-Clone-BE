import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    dislikes: {
        type: Number,
        default: 0
    },
    dislikedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String]
    },


},
    { timestamps: true }

);

const Video = mongoose.model("Video", videoSchema);

export default Video;