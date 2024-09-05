import blog from '@config/pages/blogs/single-blog.json'
import Comment from './Comment';

export default function Comments() {
    const { comments } = blog;
    return (
        <div className="comments">
          <h3 className="h5 inline-block border-b-[3px] border-primary font-primary font-medium leading-8"
          >
            Comments
            </h3>
            {comments.map((comment, i) => {
                return <Comment key={i} author={comment.author} date={comment.date} content={comment.content} replies={comment.replies} />
            })}

            </div>
    )
}