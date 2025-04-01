import { CommentModel } from "../models/comment";
import { IComment } from "../models/comment";
import { ICompany } from "../models/company";

export class CommentService {
    async postComment(comment: IComment) : Promise<IComment>{
        try{
            const newComment = new CommentModel(comment);
            return newComment.save();
        }catch(error:any){
            console.log(error);
            throw error;        
        }
    }

    async getAllComments(page: number, limit: number): Promise<IComment[]>{
        const skip = (page - 1) * limit;
        return await CommentModel.find().skip(skip).limit(limit).populate('order_id').exec();
    }

    async getCommentById(id: string): Promise<IComment | null>{
        try{
            return CommentModel.findById(id).populate('order_id').exec();
        }catch(error:any){
            console.log(error);
            throw error;        
        }
    }

    async updateCommentById(id: string, updateData: Partial<IComment>){
        try{
            return await CommentModel.updateOne({_id: id}, {$set: updateData});
        }catch(error:any){
            console.log(error);
            throw error;        
        }
    }

    async deleteCommentById(id:string): Promise<ICompany | null>{
        try{
            return CommentModel.findByIdAndDelete(id);
        }catch(error:any){
            console.log(error);
            throw error;        
        }
    }

    async getCommentsByText(searchText: string): Promise<IComment[]> {
        try {
            return await CommentModel.find({ comment: { $regex: searchText, $options: "i" } }).populate('order_id').exec();
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }


}

