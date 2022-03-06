import Button from "./../components/Button";
import { useState } from "react";
import Cookies from "js-cookie";
import images from "../data";
import { Hint } from "react-autocomplete-hint";

const PostForm = ({ user }) => {
  const names = Object.keys(images);

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
        Authorization: `${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  const handleSubmit = () => {
    const data = {
      post: {
        title: title,
        content: content,
        image_url: images[image],
      },
    };
    fetchPostForm(data);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h1>{user.alias}, deviens un Posteur !</h1>
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
        <label>Ton Imposteur</label>
        <code>{`[${names.toString()}]`}</code>
        <Hint
          options={names}
          allowTabFill
          onFill={(input) => {
            setImage(input);
          }}
        >
          <input
            className="post__input"
            placeholder="trouve ton imposteur"
            value={image}
            onChange={handleImage}
            type="text"
          />
        </Hint>

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
