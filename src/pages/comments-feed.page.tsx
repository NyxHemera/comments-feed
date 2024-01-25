import CommentFeed from "../components/organisms/comment-feed.component";
import CommentSubmission from "../components/organisms/comment-submission.component";

interface props {};

function CommentsFeedPage({ }: props) {
  return (
    <>
      <CommentSubmission></CommentSubmission>
      <CommentFeed></CommentFeed>
    </>
  );
}

export default CommentsFeedPage;