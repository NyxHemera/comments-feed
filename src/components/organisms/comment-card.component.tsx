import TextDisplay from "../atoms/text-display.component";
import { Comment } from "../../api/comment.api";
import CommentSignature from "../atoms/comment-signature.component";
import { memo } from "react";
import './comment-card.component.css'

interface props {
  comment: Comment;
};

const CommentCard = memo(({ comment }: props) => {
  return (
    <div className="comment-card">
        <TextDisplay>{comment.message}</TextDisplay>
        <CommentSignature comment={comment}></CommentSignature>
    </div>
  );
})

export default CommentCard;