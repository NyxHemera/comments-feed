import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { getAllComments } from '../../api/comment.api';
import { Comment } from '../../api/comment.api';
import CommentCard from "./comment-card.component";
import './comment-feed.component.css'

interface props {};

function CommentFeed({ }: props) {
  const [comments, setComments] = useState([] as Comment[]);
  const getComments = async () => { // Retrieves initial comment list
    const comments = await getAllComments();
    setComments(comments.reverse()); // API sends them oldest to newest
  }
  
  const WS = useWebSocket('ws://localhost:3001/commentWS', { // Could be race condition with getComments...should be sorting comments by timestamp and unique off id
    onMessage: ({ data }: { data: string }) => { // Intakes new messages while tab is opened
      const message = JSON.parse(data);
      setComments([message, ...comments]); // Adds new comments to the top of the list
    }
  });

  useEffect(() => {
    getComments();
  }, []);

  const renderCommentFeed = (comments: Comment[]) => {
    return comments.map((comment: Comment) => ( <CommentCard comment={ comment }></CommentCard> ));
  }

  return (
    <div className="comment-feed">
        { renderCommentFeed(comments) }
    </div>
  );
}

export default CommentFeed;