import { useUserContext } from "../UserContext";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Button from "./Button";
import Post from "./Post";

const PostsList = ({ data }) => {
  const { user } = useUserContext();
  const [filter, setFilter] = useState(false);

  const handleFilterSubmit = () => {
    setFilter(!filter);
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
        {setData(data).map((post) => (
          <Post post={post} />
        ))}
      </Masonry>
      ;
    </div>
  );
};

export default PostsList;
