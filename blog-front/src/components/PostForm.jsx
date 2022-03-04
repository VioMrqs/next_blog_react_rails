import Button from "./../components/Button";
import { useState } from "react";
import Cookies from "js-cookie"
import images from "../data";

const PostForm = ({user}) => {
  // States 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  // Handling the title change
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // Handling the message change
  const handleContent = (e) => {
    setContent(e.target.value);
  };

    const handleImage = (e) => {
      setImage(e.target.value);
    };

  const fetchPostForm = async (data) => {
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        "Authorization": `${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      const result = await response.json();
      console.log(result);
  };

  const handleSubmit = () => {
    const data = {
      post: {
        title: title,
        content: content,
        image_url: image,
      },
    };
    fetchPostForm(data);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h1>Deviens un Posteur {user.alias} !</h1>
        <label>Titre</label>
        <input
          onChange={handleTitle}
          className="post__input"
          value={title}
          type="text"
        />
        <label>Message</label>
        <input
          onChange={handleContent}
          className="post__input"
          value={content}
          type="text"
        />
        <label>Image (URL)</label>
        <input
          onChange={handleImage}
          className="post__input"
          value={image}
          type="text"
        />
        <Button
          type={"submit"}
          text={"Envoi dans la toile"}
          className={"button__normal"}
        />
      </form>
    </div>
  );
};

export default PostForm;
