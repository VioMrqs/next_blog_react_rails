import Button from "./Button";
import { useUserContext } from "../UserContext";
import Cookies from "js-cookie";
import PostUpdateForm from "./PostUpdateForm";
import { useState } from "react";
import Masonry from "react-masonry-css";
import CommentsList from "./CommentsList";

const PostsList = ({ data }) => {
  const { user } = useUserContext();
  const userToken = Cookies.get("token");
  const [showUpdate, setShowUpdate] = useState(false);
  const [filter, setFilter] = useState(false);
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

  const handleFilterSubmit = () => {
    setFilter(!filter);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const setData = (data) => {
    return filter ? data.filter((post) => post.user_id === user.id) : data;
  };

  return (
    <div className="post__container">
      <div className="post__header">
        <h1>FEED</h1>
        {user && (
          <Button
            text={filter ? "Tous les posts" : "Mes posts"}
            onClick={() => handleFilterSubmit()}
            className={"button__normal"}
          />
        )}
      </div>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {setData(data).map((post) => {
          return (
            <div key={post.id}>
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
            </div>
          );
        })}
      </Masonry>
      ;
    </div>
  );
};

export default PostsList;
