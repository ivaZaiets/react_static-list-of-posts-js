import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post: {
  title,
  body,
  comments,
  user,
} }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={user} />

      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length === 0 ? (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
