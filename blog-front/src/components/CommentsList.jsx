import Button from "./Button";
import { useUserContext } from "../UserContext";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const CommentsList = ({ post }) => {
  const { user } = useUserContext();
  const [content, setContent] = useState("");
  const userToken = Cookies.get("token");
  // const [showUpdate, setShowUpdate] = useState(false);
  // const [filter, setFilter] = useState(false);

  // Post a comment
  const fetchNewComment = async (data) => {
    const response = await fetch(`http://localhost:3000/posts/${post.id}/comments`, {
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCommentSubmit = () => {
    const data = {
      comment: {
        content: content,
      },
    };
    fetchNewComment(data);
  };

  // Update comment

  // Delete comment
  // const deletePost = async (id) => {
  //   const response = await fetch(`http://localhost:3000/posts/${id}`, {
  //     headers: {
  //       Authorization: `${userToken}`,
  //       "Content-Type": "application/json",
  //     },
  //     method: "DELETE",
  //   });
  //   const result = await response.json();
  //   console.log(result);
  // };

  // const handleDeleteSubmit = (id) => {
  //   deletePost(id);
  //   window.location.reload();
  // };

  // const handleUpdateSubmit = () => {
  //   setShowUpdate(!showUpdate);
  // };

  // const handleFilterSubmit = () => {
  //   setFilter(!filter);
  // };

  // const setData = (data) => {
  //   return filter ? data.filter((post) => post.user_id === user.id) : data;
  // };

  return (
    <div className="post__container">
      {user && (<div className="form__container">
        <form onSubmit={handleCommentSubmit}>
          <input
            onChange={handleContent}
            className="post__input"
            value={content}
            type="text"
          />
          <Button type={"submit"} text={"Comm'"} />
        </form>
      </div>)}
      <div className="post__header">
        {post.comments.map((comment) => {
          return (
            <div key={comment.id} className="comments__list">
              <p>{comment.content}</p>
              {/* {user && user.id === comment.user_id && (
                <>
                  <Button
                    text={"Supprimer"}
                    onClick={() => handleDeleteSubmit(comment.id)}
                  />
                  <Button
                    text={"Modifier"}
                    onClick={() => handleUpdateSubmit()}
                  />
                  {showUpdate ? <PostUpdateForm id={comment.id} /> : null}
                </>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsList;
