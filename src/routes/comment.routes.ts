import { Router } from 'express';
import { postComment, getAllComments, getCommentById, getCommentsByText, deleteCommentById, updateCommentById} from '../controllers/comment.controller';

const router = Router();

router.get("/", getAllComments);
router.get('/:id', getCommentById);
router.get('/text/:text',getCommentsByText );
router.post("/", postComment);
router.put('/:id', updateCommentById);
router.delete('/:id', deleteCommentById);

export default router;