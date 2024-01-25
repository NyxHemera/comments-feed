import { Comment } from '../../api/comment.api';
import './comment-signature.component.css'

interface props {
  comment: Comment;
};

function CommentSignature({ comment }: props) {
  
  const buildSignature = ({ name, created}: Comment): string => {
    const createdDate = new Date(`${created}Z` || ''); // should validate that created is actually a date
    const day = createdDate.toLocaleString('en-US', { weekday: "long", timeZone: 'EST' });
    const time = createdDate.toLocaleString('en-US', { hour: "numeric", minute: "numeric", timeZone: 'EST' });
    return `${name} on ${day} at ${time}`;
  }
  
  return (
    <div className="comment-signature">{ buildSignature(comment) }</div>
  );
}

export default CommentSignature;