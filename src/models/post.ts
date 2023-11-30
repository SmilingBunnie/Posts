import {Schema, model} from 'mongoose'
import { Post } from './interface'

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const PostModel = model<Post>('NewPosts', PostSchema)

export default PostModel