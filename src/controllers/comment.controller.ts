import { Request, Response } from "express";
import { IComment } from "../models/comment";
import { CommentService } from "../services/comment.service";

const commentService = new CommentService();

export async function postComment(req: Request, res: Response): Promise<void> {
    try{
        const comment = req.body as IComment;
        const newComment = await commentService.postComment(comment);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json( error );
    }
}
export async function getAllComments(req: Request, res: Response): Promise<void> {
    try{
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 25;
        const comments = await commentService.getAllComments(page, limit);
        res.status(201).json(comments);
    } catch (error) {
        res.status(500).json( error );
    }
}
export async function getCommentById(req: Request, res: Response): Promise<void> {
    try{
        const comment = await commentService.getCommentById(req.params.id);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json( error );
    }
}
export async function updateCommentById(req: Request, res: Response): Promise<void> {
    try{
        const updatedComment = await commentService.updateCommentById(req.params.id,req.body as IComment);
        res.status(201).json(updatedComment);
    }catch(error: any){
        res.status(400).json(error);
    }
}
export async function deleteCommentById(req: Request, res: Response): Promise<void> {
    try{
        const deleteComment=await commentService.deleteCommentById(req.params.id);
        res.status(201).json(deleteComment);
    } catch (error) {
        res.status(500).json( error );
    }
}
export async function getCommentsByText(req: Request, res: Response): Promise<void> {
    try{
        const comments = await commentService.getCommentsByText(req.params.text);
        res.status(201).json(comments);
    } catch (error) {
        res.status(500).json( error );
    }
}