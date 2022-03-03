const PostList = ({data}) => {
  return (
    <div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.user_id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
