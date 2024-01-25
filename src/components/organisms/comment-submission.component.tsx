import { useState } from "react";
import Button from "../atoms/button.component";
import TextInput from "../atoms/text-input.component";
import { Comment, createComment } from '../../api/comment.api';
import './comment-submission.component.css'
import Header from "../atoms/header.component";

interface props {};

function CommentSubmission({ }: props) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSubmission = async (comment: Comment) => {
    await createComment(comment); // Probably want some type of validation like max length or required
    setMessage('');
    setHasSubmitted(true);
  }

  return (
    <div className="comment-submission">
        { hasSubmitted ? <Header>{ name }</Header> : <TextInput name="Name" label="Name" value={name} onChange={ setName }></TextInput> }
        <TextInput name="Message" label="Message" value={message} isLarge={ true } onChange={ setMessage }></TextInput>
        <Button onClick={() => handleSubmission({ name, message })}>Comment</Button>
    </div>
  );
}

export default CommentSubmission;