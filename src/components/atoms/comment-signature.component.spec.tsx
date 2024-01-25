import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Comment } from '../../api/comment.api';
import CommentSignature from './comment-signature.component';

const comment: Comment = {
  name: 'Jordan',
  message: 'This is a test message',
  created:	"2024-01-25 00:49:30",
  id: 12
}

test('loads and displays signature', async () => {
  const { container } = render(<CommentSignature comment={comment} />);
  expect(container.getElementsByClassName('comment-signature')[0].innerHTML).toMatchInlineSnapshot(`"Jordan on Wednesday at 7:49 PM"`);
});