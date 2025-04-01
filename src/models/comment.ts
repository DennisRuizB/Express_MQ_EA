import { ObjectId, Schema, model } from "mongoose";

export interface IComment {
    _id?: ObjectId
    order_id: ObjectId
    comment: string;
    date?: Date;
}

const commentSchema = new Schema<IComment>({
    order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true},
    comment: { type: String, required: true},
    date: { type: Date, default: Date.now}
});

export const CommentModel = model<IComment>("Comment", commentSchema);