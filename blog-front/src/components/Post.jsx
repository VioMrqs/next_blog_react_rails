import { useUserContext } from "../UserContext";
import Cookies from "js-cookie";
import { useState } from "react";
import CommentsList from "./CommentsList";
import Button from "./Button";
import PostUpdateForm from "./PostUpdateForm";

const Post = ({ post }) => {
  const { user } = useUserContext();
  const userToken = Cookies.get("token");
  const [showUpdate, setShowUpdate] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  };

  const handleDeleteSubmit = (id) => {
    deletePost(id);
    window.location.reload();
  };

  const handleUpdateSubmit = () => {
    setShowUpdate(!showUpdate);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <h2>{post.title}</h2>
      <img
        className="post__picture"
        src={post.image_url}
        alt="instagramable"
        onClick={() => handleShowComments()}
      ></img>
      <div className="post__text__picture">{post.content}</div>
      {showComments ? <CommentsList post={post} /> : null}
      {user && user.id === post.user_id && (
        <>
          <Button
            text={"Supprimer"}
            onClick={() => handleDeleteSubmit(post.id)}
            className={"button__small"}
          />
          <Button
            text={"Modifier"}
            onClick={() => handleUpdateSubmit()}
            className={"button__small"}
          />
          {showUpdate ? <PostUpdateForm id={post.id} /> : null}
        </>
      )}
    </>
  );
};
export default Post;
